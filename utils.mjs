import { STOP_WORDS, CATEGORY_WORDS } from './themes/shared.mjs'

export const clamp = (x, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, x))
export const lerp = (a, b, t) => a + (b - a) * t
export const round2 = x => Math.round((x + Number.EPSILON) * 100) / 100
export const softmax = (xs, temp = 1) => {
  const mx = Math.max(...xs), exps = xs.map(v => Math.exp((v - mx) / temp)), sum = exps.reduce((a, b) => a + b, 0)
  return exps.map(e => e / (sum || 1))
}
export const sampleIndex = probs => {
  let r = Math.random(), acc = 0
  for (let i = 0; i < probs.length; i++) {
    acc += probs[i]
    if (r <= acc) return i
  }
  return probs.length - 1
}
export const moving = (prev, delta, rate = 0.25) => prev + rate * delta

export const normalize = (x, ceiling = 128) => clamp(x / ceiling, 0, 1)

export function editDistance(s1, s2) {
  const dp = Array.from({ length: s2.length + 1 }, (_, i) => [i])
  for (let j = 0; j <= s1.length; j++) dp[0][j] = j
  for (let i = 1; i <= s2.length; i++) {
    for (let j = 1; j <= s1.length; j++) {
      dp[i][j] = s2[i - 1] === s1[j - 1] ? dp[i - 1][j - 1] : Math.min(dp[i - 1][j - 1] + 1, dp[i][j - 1] + 1, dp[i - 1][j] + 1)
    }
  }
  return dp[s2.length][s1.length]
}

export function noveltyVersus(a = '', b = '') {
  const lg = a.length > b.length ? a : b, sh = a.length > b.length ? b : a
  if (lg.length === 0) return 0
  return 1 - (editDistance(lg, sh) / lg.length)
}

export function supportFrom(stance) { return { taste: 1.0, growth: 0.7, emerging: 0.2, rut: 0.0 }[stance] ?? 0.2 }

export function stanceValenceOf(speakerStance, receiverStance) {
  const base = { rut: -0.4, emerging: 0.0, growth: 0.25, taste: 0.45 }[speakerStance] ?? 0
  const match = speakerStance === receiverStance ? 0.15 : 0
  const receiverBias = receiverStance === 'rut' ? -0.05 : 0
  return clamp(base + match + receiverBias, -1, 1)
}

export function overloadPenalty(receiver, novelty) {
  const base = novelty > 0.85 ? 0.12 : novelty > 0.7 ? 0.06 : 0
  const rutAmp = receiver.stance === 'rut' ? 0.1 * novelty : 0
  return base + rutAmp
}

export function brevityScore(text) {
  const len = [...(text || '')].length
  if (len <= 40) return 1
  if (len >= 240) return 0
  return 1 - (len - 40) / 200
}

export function mismatchPenalty(rS, s) {
  const combo = `${rS}->${s}`
  return ({ 'rut->taste': 0.35, 'rut->growth': 0.25, 'taste->rut': 0.25, 'growth->rut': 0.2 }[combo]) ?? 0.0
}

export function computeMemeticInfluence(speaker, utterance, receiver) {
  const s = speaker.stance === receiver.stance ? 1.0 : 0.3
  const pA = 1 - Math.abs(speaker.state.plasticity - receiver.state.plasticity)
  const e = 1 - Math.abs(speaker.state.energy - receiver.state.energy)
  const iS = (s * 0.4 + pA * 0.3 + e * 0.3) * (speaker.state.energy * 0.7 + speaker.state.plasticity * 0.3)
  if (iS < 0.3) return { shouldAdoptStance: false, strength: iS, dominantStance: speaker.stance }
  const movement = utterance.movement || {}, text = utterance.text || ''
  return {
    shouldAdoptStance: iS > 0.5,
    dominantStance: speaker.stance,
    strength: iS,
    movementBleed: {
      quality: movement.quality,
      amplitude: movement.amplitude || 0.5,
      rhythm: movement.rhythm || 'balanced',
      flow: movement.flow || 'continuous',
      spatial: movement.spatial || 'neutral'
    },
    dominantGestures: extractGesturesFromMovement(movement),
    dominantVerbs: extractVerbsFromText(text),
    dominantPatterns: extractPatternsFromText(text),
    dominantWords: extractWordsByCategory(text)
  }
}

export function extractGesturesFromMovement(movement) {
  const gestures = []
  if (movement.primaryGesture) gestures.push(movement.primaryGesture)
  if (movement.movementPhrase) {
    const phrases = movement.movementPhrase.split('→').map(p => p.trim())
    gestures.push(...phrases.slice(0, 2))
  }
  return gestures.length > 0 ? gestures : ['neutral presence', 'balanced stance']
}

export function extractVerbsFromText(text) {
  const fallbackVerbs = ['being', 'becoming', 'expanding', 'consolidating', 'refining', 'exploring', 'integrating']
  if (!text || typeof text !== 'string') {
    return fallbackVerbs.slice(0, 2)
  }
  const lower = text.toLowerCase()
  const tokens = lower.match(/\b[a-z']{3,}\b/g) || []
  const commonVerbs = new Set(fallbackVerbs.concat(['shifting', 'moving', 'changing', 'aligning', 'adjusting']))
  const seen = new Set()
  const verbs = []
  for (const w of tokens) {
    const isCommon = commonVerbs.has(w)
    const isIng = w.endsWith('ing') && w.length > 4
    const isEd = w.endsWith('ed') && w.length > 4
    if ((isCommon || isIng || isEd) && !seen.has(w)) {
      seen.add(w)
      verbs.push(w)
      if (verbs.length >= 3) break
    }
  }
  return verbs.length > 0 ? verbs : fallbackVerbs.slice(0, 2)
}

export function extractPatternsFromText(text) {
  if (!text || typeof text !== 'string') return ['My {noun} is {adjective}', 'This {noun} {verb}']
  const lower = text.toLowerCase(), patterns = []
  if (/\bas\b/.test(lower)) patterns.push('As my {noun} {verb}')
  if (/\bthrough\b/.test(lower)) patterns.push('Through {adjective} {noun}')
  if (lower.includes('in this')) patterns.push('In this {noun}, {adjective} {verb}')
  return patterns.length > 0 ? patterns : ['My {noun} is {adjective}', 'This {noun} {verb}']
}

export function extractWordsByCategory(text) {
  const defaults = CATEGORY_WORDS
  if (!text || typeof text !== 'string') return { ...defaults }
  const lower = text.toLowerCase()
  const tokens = lower.match(/\b[a-z']{3,}\b/g) || []
  const stopwords = new Set(STOP_WORDS)
  const adjectives = [], nouns = [], verbs = []
  for (const w of tokens) {
    if (stopwords.has(w)) continue
    const isIng = w.endsWith('ing') && w.length > 5
    if (isIng) {
      if (!verbs.includes(w)) verbs.push(w)
      continue
    }
    if (w.length > 4) {
      if (!adjectives.includes(w)) adjectives.push(w)
      if (!nouns.includes(w)) nouns.push(w)
    } else if (w.length > 3) {
      if (!nouns.includes(w)) nouns.push(w)
    }
  }
  return {
    adjectives: adjectives.length > 0 ? adjectives.slice(0, 3) : defaults.adjectives,
    nouns: nouns.length > 0 ? nouns.slice(0, 3) : defaults.nouns,
    verbs: verbs.length > 0 ? verbs.slice(0, 3) : defaults.verbs,
    adverbs: defaults.adverbs,
    conjunctions: defaults.conjunctions
  }
}