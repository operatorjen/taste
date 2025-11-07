import { clamp, lerp, round2, softmax, sampleIndex, moving, normalize, noveltyVersus, supportFrom,
  stanceValenceOf, overloadPenalty, brevityScore, mismatchPenalty, computeMemeticInfluence } from './utils.mjs'

export class Agent {
  constructor(name, themePacks = {}, motifConfig = {}, initState = {}, ProjectionsCtor = Projections) {
    this.name = name
    this.proj = new ProjectionsCtor(themePacks, motifConfig)
    this.state = {
      energy: 0.65,
      plasticity: 0.6,
      quality: 0.55,
      framework: { coherence: 0.6, adaptability: 0.6, complexity: 0.6 },
      ...initState
    }
    this.stance = 'emerging'
    this.lastUtterance = ''
    this.telemetry = { pR: 0, aS: 0, novelty: 0 }
    this._cooldown = 0
    this.memeticSusceptibility = initState.plasticity || 0.6
    this.influenceHistory = []
  }

  _context() {
    const { plasticity, quality, framework } = this.state
    return { plasticity, quality, framework }
  }

  speak(input = '', dt = 1, conversationContext = {}) {
    const out = this.proj.update(input, this._context(), dt, conversationContext)
    const encState = this.proj.encoder?.getState?.() ?? { alphabet: [], base: [], digits: 1 }
    const aS = encState.alphabet?.length ?? 0, attempted = out?.content?.length ?? 0
    const encoded = out?.encoded ?? null
    const decoded = (() => {
      try { return this.proj.encoder?.decodeString?.(out.encoded) ?? out.content }
      catch { return out.content }
    })()
    const survived = decoded?.length ?? 0
    const pR = attempted > 0 ? clamp((attempted - survived) / attempted) : 0
    this.stance = out.state || this.stance
    this.lastUtterance = out.content || ''
    this.telemetry = {
      aS, pR,
      novelty: 1 - noveltyVersus(this.lastUtterance, decoded || ''),
      movement: out.movement
    }
    const speakDrain = 0.03
    const stanceBoost = supportFrom(this.stance) * 0.01
    this.state.energy = clamp(this.state.energy - speakDrain + stanceBoost, 0, 1.5)
    this._cooldown = 1
    return {
      text: this.lastUtterance,
      encoded,
      stance: this.stance,
      encoder: encState,
      telemetry: this.telemetry,
      movement: out.movement,
      memeticInfluence: out.memeticInfluence || { type: 'none' }
    }
  }

  hear(dP, dE, dQ, inertia = 0.35) {
    const s = this.state
    s.plasticity = clamp(moving(s.plasticity, dP, inertia))
    s.energy = clamp(moving(s.energy, dE, inertia), 0, 1.5)
    s.quality = clamp(moving(s.quality, dQ, inertia))
    s.framework.coherence = clamp(moving(s.framework.coherence,  0.5 * dQ + 0.2 * dP, inertia))
    s.framework.adaptability = clamp(moving(s.framework.adaptability,0.6 * dP, inertia))
    s.framework.complexity = clamp(moving(s.framework.complexity,  0.3 * Math.abs(dP) + 0.2 * dQ, inertia))
  }

  idle(dt = 1) {
    this.state.energy = lerp(this.state.energy, 0.8, 0.05 * dt)
    this.state.plasticity = lerp(this.state.plasticity, 0.65, 0.03 * dt)
    this.state.quality = lerp(this.state.quality, 0.6, 0.02 * dt)
    if (this._cooldown > 0) this._cooldown -= 1
  }

  getMemeticProfile() {
    return {
      susceptibility: this.memeticSusceptibility,
      influenceHistory: this.influenceHistory.slice(-5),
      currentStance: this.stance,
      plasticity: this.state.plasticity,
      energy: this.state.energy
    }
  }
}

export class Orchestrator {
  constructor(agents, W, opts = {}) {
    this.agents = agents
    this.W = W
    this.t = 0
    this.opts = { temperature: 0.65, boredom: 0.25, ...opts }
    this.history = []
    this._stanceMemory = new Map(agents.map(a => [a.name, { last: a.stance, streak: 0 }]))
    this.memeticField = {
      dominantStance: 'emerging',
      strength: 0,
      coherence: 0,
      lastUpdate: 0
    }
  }

  _updateMemeticField() {
    const stances = this.agents.map(a => a.stance)
    const sC = {}
    stances.forEach(stance => { sC[stance] = (sC[stance] || 0) + 1 })
    const d = Object.entries(sC).reduce((a, b) => a[1] > b[1] ? a : b)
    const tE = this.agents.reduce((sum, a) => sum + a.state.energy, 0)
    const aP = this.agents.reduce((sum, a) => sum + a.state.plasticity, 0) / this.agents.length
    this.memeticField = {
      dominantStance: d[0],
      strength: (d[1] / this.agents.length) * (tE / this.agents.length),
      coherence: aP * 0.7 + (d[1] / this.agents.length) * 0.3,
      lastUpdate: this.t
    }
  }

  _computeMemeticInfluence(speaker, utterance, receiver) {
    const b = computeMemeticInfluence(speaker, utterance, receiver)
    const fieldStrength = this.memeticField.strength * (speaker.stance === this.memeticField.dominantStance ? 1.2 : 0.8)
    return {
      ...b,
      strength: clamp(b.strength * 0.7 + fieldStrength * 0.3),
      fieldAugmented: fieldStrength > 0.4
    }
  }

  _sanitizeQuotedUtterance(s) {
    if (!s) return s
    let t = String(s).replace(/^(?:What you said about\s+)+/i, 'What you said about ')
    const words = t.trim().split(/\s+/)
    if (words.length > 12) t = words.slice(0, 12).join(' ') + '…'
    return t
  }

  _postProcessStyle(s) {
    if (!s) return s
    let t = s
    t = t.replace(/\b(What you said about)\s+\1\b/gi, '$1 ')
    t = t.replace(/\b(\w+)\s+\1\b/gi, '$1')
    t = t.replace(/\bmore\s+expanding\b/gi, 'more expansive')
    t = t.replace(/\bbecoming\s+more\s+expanding\b/gi, 'becoming more expansive')
    const stemPairs = [
      ['expand', /expans\w*/i],
      ['consolidat\w*', /consolid\w*/i],
      ['stabiliz\w*', /stabil\w*/i],
      ['systematiz\w*', /systemat\w*/i],
      ['reinforc\w*', /reinforc\w*/i],
      ['solidif\w*', /solid\w*/i]
    ]
    for (const [vStem, aStem] of stemPairs) {
      const re = new RegExp(`\\b(${vStem})\\b([^.,;]*?)\\bin\\s+(${aStem})\\w*\\s+ways\\b`, 'i')
      t = t.replace(re, (_m, v, mid) => `${v}${mid}in clear ways`)
    }
    const recentAvg = this._avgRecentLength(6)
    if (recentAvg > 160 || t.length > 200) t = t.replace(/,?\s+(?:which|that|so|hence|consequently|therefore)\b.*$/i, '')
    t = t.replace(/\s{2,}/g, ' ').trim()
    return t
  }

  _avgRecentLength(n = 6) {
    if (!this.history.length) return 0
    const seg = this.history.slice(-n)
    const sum = seg.reduce((acc, h) => acc + (h?.text?.length || 0), 0)
    return sum / seg.length
  }

  _needsAn(word) {
    if (!word) return false
    const raw = String(word).replace(/^["'`(]+/, ''), w = raw.toLowerCase()
    const exc = new Set(['honest','honor','honour','hour','heir','herb'])
    if (exc.has(w)) return true
    const ex = ['university','unit','union','unique','ubiquitous','european','eulogy','eureka','ukulele','user', 'useful','one','once','ouija']
    if (ex.some(p => w.startsWith(p))) return false
    if (/^[A-Z][A-Z.-]*$/.test(raw)) {
      const vowelSoundLetters = new Set(['A','E','F','H','I','L','M','N','O','R','S','X'])
      return vowelSoundLetters.has(raw[0])
    }
    if (/^[0-9]/.test(raw)) return /^[18]/.test(raw)
    return /^[aeiou]/.test(w)
  }

  _fixIndefiniteArticles(text) {
    if (!text || typeof text !== 'string') return text
    return text.replace(/\b([Aa])\s+([\"'`(]*)([A-Za-z0-9][\w'-]*)/g, (m, art, punct, next) => {
      const needsAn = this._needsAn(punct + next)
      const want = needsAn ? 'an' : 'a'
      const cased = art === 'A' ? want[0].toUpperCase() + want.slice(1) : want
      return `${cased} ${punct}${next}`
    })
  }

  _pickOtherSpeaker(currentName) {
    const others = this.agents.map(a => a.name).filter(n => n !== currentName)
    if (others.length === 0) return this._getGenericReference()
    const last = this.history[this.history.length - 1]
    if (last && last.speaker !== currentName && others.includes(last.speaker)) return last.speaker
    return others[Math.floor(Math.random() * others.length)]
  }

  _fillInteractivePlaceholders(text, currentName) {
    if (!text || typeof text !== 'string') return { text }
    const last = this.history[this.history.length - 1]
    const other = this._pickOtherSpeaker(currentName)
    const lastFromOther = last && last.speaker === other ? last : null
    const theirStance = lastFromOther?.stance || 'emerging'
    const theirUtterance = this._sanitizeQuotedUtterance(lastFromOther?.text || 'what was shared')
    let out = text.replaceAll('{otherSpeaker}', other).replaceAll('{theirStance}', `"${theirStance}"`)
      .replaceAll('{theirUtterance}', `"${theirUtterance}"`).replaceAll(currentName, this._getGenericReference())
    out = this._fixIndefiniteArticles(out)
    out = this._postProcessStyle(out)
    return { text: out }
  }

  _getGenericReference() {
    const generics = ['In my observation', 'From this perspective', 'Upon reflection', 'In this context', 'From my vantage point', 'What strikes me', 'My realization is that']
    return generics[Math.floor(Math.random() * generics.length)]
  }

  pickSpeaker() {
    const scores = this.agents.map(a => {
      const bored = a._cooldown > 0 ? this.opts.boredom : 0
      return a.state.energy - bored
    })
    const probs = softmax(scores, this.opts.temperature)
    return this.agents[sampleIndex(probs)]
  }

  appraise(receiver, speaker, utter) {
    const w = (this.W?.[speaker.name]?.[receiver.name]) ?? 0.5
    const stanceVal = stanceValenceOf(utter.stance, receiver.stance)
    const aN = normalize(utter.encoder?.alphabet?.length ?? 0, 120)
    const pruned = clamp(utter.telemetry?.pR ?? 0)
    const novelty = clamp(utter.telemetry?.novelty ?? 0)
    const overload = overloadPenalty(receiver, novelty)
    const dP = w * (0.6 * stanceVal + 0.35 * (1 - pruned) + 0.25 * novelty - overload)
    const dE = w * (0.55 * supportFrom(utter.stance) + 0.25 * brevityScore(utter.text) - 0.5  * mismatchPenalty(receiver.stance, utter.stance))
    const consistency = this._stanceConsistency(speaker.name, utter.stance), dQ = w * (0.7 * aN + 0.3 * consistency)
    return { dP, dE, dQ }
  }

  _stanceConsistency(name, current) {
    const mem = this._stanceMemory.get(name)
    if (!mem) return 0
    const same = mem.last === current
    mem.streak = same ? (mem.streak + 1) : 0
    mem.last = current
    return clamp(1 - Math.exp(-0.4 * mem.streak))
  }

  tick(input = '', dt = 1) {
    this.agents.forEach(a => a.idle(dt))
    const speaker = this.pickSpeaker()
    const lastTurn = this.history.length > 0 ? this.history[this.history.length - 1] : null
    this._updateMemeticField()
    let memeticInfluence = null
    if (lastTurn) {
      const lastSpeaker = this.agents.find(a => a.name === lastTurn.speaker)
      if (lastSpeaker) memeticInfluence = this._computeMemeticInfluence(lastSpeaker, lastTurn, speaker)
    }
    const ctx = lastTurn ? {
      lastSpeaker: lastTurn.speaker,
      lastUtterance: lastTurn.text,
      lastStance: lastTurn.stance,
      turnsSinceLastSpeak: this.t - lastTurn.t,
      memeticInfluence: memeticInfluence
    } : {}
    const utter = speaker.speak(input, dt, ctx)
    const filled = this._fillInteractivePlaceholders(utter.text, speaker.name)
    utter.text = this._fixIndefiniteArticles(filled.text)
    for (const r of this.agents) {
      if (r === speaker) continue
      const { dP, dE, dQ } = this.appraise(r, speaker, utter)
      r.hear(dP, dE, dQ)
    }
    const snapshot = {
      t: this.t++,
      speaker: speaker.name,
      stance: utter.stance,
      expressedStance: utter.memeticInfluence?.type === 'stance_adoption' ? utter.memeticInfluence.adoptedStance : utter.stance,
      text: utter.text,
      movement: utter.movement,
      aS: utter.encoder?.alphabet?.length ?? 0,
      pR: utter.telemetry?.pR ?? 0,
      energies: Object.fromEntries(this.agents.map(a => [a.name, round2(a.state.energy)])),
      plasticities: Object.fromEntries(this.agents.map(a => [a.name, round2(a.state.plasticity)])),
      memeticInfluence: utter.memeticInfluence || { type: 'none' },
      memeticField: { ...this.memeticField }
    }
    this.history.push(snapshot)
    return snapshot
  }

  getMemeticField() { return { ...this.memeticField } }
  getAgentMemeticProfiles() { return Object.fromEntries(this.agents.map(a => [a.name, a.getMemeticProfile()])) }
}