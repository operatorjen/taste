import { ALPHA } from './shared.mjs'

export const ALPHA_THEME = {
  name: 'alpha',
  stateLexicons: {
    rut: {
      adjectives: ['stalled', 'trapped', 'frustrated', 'blocked', 'stifled', 'constrained', 'paralyzed',
        'stagnant', 'rigid', 'pressured', 'confined', 'tense', 'overwhelmed', 'uncertain', 'helpless', 'disheartened',
        'discouraged', 'restricted', 'inhibited', 'static'],
      nouns: ['blockage', 'impasse', 'obstacle', 'barrier', 'delay', 'friction', 'resistance', 'inhibition', 'constraint',
        'bottleneck', 'standstill', 'deadlock', 'setback', 'limitation', 'burden', 'pressure', 'stagnation', 'gridlock',
        'trap', 'hindrance'],
      verbs: ['halt', 'stall', 'struggle', 'resist', 'waver', 'hesitate', 'retreat', 'pause', 'delay', 'withdraw', 'freeze',
        'restrain', 'suppress', 'stumble', 'lose', 'recoil', 'yield', 'defer', 'break', 'stop'],
      adverbs: ['frustratingly', 'helplessly', 'reluctantly', 'anxiously', 'uncertainly', 'rigidly', 'nervously', 'tensefully',
        'hesitantly', 'uneasily', 'inwardly', 'awkwardly', 'wearily', 'weakly', 'unwillingly', 'cautiously', 'restlessly',
        'apathetically', 'fretfully', 'resignedly'],
      conjunctions: []
    },
    taste: {
      adjectives: ['strategic', 'decisive', 'authoritative', 'commanding', 'visionary', 'influential',
        'persuasive', 'directed', 'coordinated', 'focused', 'assertive', 'clarifying', 'guiding', 'structured',
        'directive', 'intentional', 'purposeful', 'shaping', 'aligned', 'coherent'],
      nouns: ['leadership', 'vision', 'strategy', 'direction', 'command', 'authority', 'guidance', 'influence',
        'framework', 'trajectory', 'initiative', 'agenda', 'orientation', 'charter', 'mandate', 'coordination',
        'blueprint', 'doctrine', 'pivot', 'pathing'],
      verbs: ['orchestrate', 'direct', 'guide', 'steer', 'shape', 'frame', 'define', 'clarify', 'coordinate',
        'lead', 'chart', 'outline', 'structure', 'formulate', 'articulate', 'establish', 'set forth', 'advise',
        'champion', 'align'],
      adverbs: ['confidently', 'decisively', 'authoritatively', 'strategically', 'persuasively', 'convincingly',
        'deliberately', 'assertively', 'clearly', 'directly', 'purposefully', 'intentionally', 'firmly',
        'coherently', 'strongly', 'commandingly', 'clarifyingly', 'guidingly', 'resolutely', 'precisely'],
      conjunctions: ['therefore', 'consequently', 'accordingly', 'thus', 'such that', 'furthermore', 'moreover',
        'so that', 'as a result', 'then']
    },
    growth: {
      adjectives: ['expansive', 'amplifying', 'escalating', 'intensive', 'accelerating', 'broadening',
        'strengthening', 'advancing', 'progressive', 'emerging', 'driving', 'forceful', 'potent',
        'increasing', 'multiplying', 'compounding', 'dynamic', 'encouraging', 'generating', 'monitoring'],
      nouns: ['influence', 'momentum', 'impact', 'reach', 'scope', 'scale', 'velocity', 'amplitude', 'force',
        'drive', 'expansion', 'trajectory', 'power', 'initiative', 'acceleration', 'uptake', 'intensity', 'leverage',
        'extension', 'propagation'],
      verbs: ['accelerate', 'amplify', 'escalate', 'expand', 'intensify', 'advance', 'propel', 'drive', 'extend',
        'broaden', 'multiply', 'strengthen', 'energize', 'elevate', 'magnify', 'boost', 'unfold', 'project', 'scale',
        'escalate further'],
      adverbs: ['exponentially', 'rapidly', 'dramatically', 'significantly', 'intensely', 'forcefully', 'powerfully',
        'decisively', 'strategically', 'assertively', 'energetically', 'actively', 'progressively', 'boldly',
        'purposefully', 'deliberately', 'consistently', 'amplifyingly', 'systematically', 'compoundingly'],
      conjunctions: ['while', 'although', 'despite', 'consequently', 'therefore', 'thus', 'hence', 'moreover',
        'additionally', 'as a result']
    },
    emerging: {
      adjectives: ['promising', 'incipient', 'burgeoning', 'formative', 'budding', 'initial', 'preliminary', 'early',
        'fresh', 'tentative', 'incipient', 'awakening', 'unformed', 'substantial', 'introductory', 'developing',
        'anticipatory', 'blooming', 'opening', 'sparking'],
      nouns: ['initiative', 'momentum', 'direction', 'trajectory', 'pathway', 'vector', 'opening', 'approach',
        'signal', 'spark', 'kernel', 'seed', 'incipient motion', 'starting line', 'steps', 'topology',
        'arc', 'emergent region', 'surroundings', 'orientation'],
      verbs: ['initiate', 'engage', 'commence', 'begin', 'launch', 'start', 'signal', 'trigger', 'spark', 'advance',
        'move', 'lean', 'proceed', 'enter', 'approach', 'set forth', 'open', 'activate', 'orient', 'frame'],
      adverbs: ['tentatively', 'gradually', 'cautiously', 'incrementally', 'carefully', 'subtly', 'quietly',
        'slowly', 'deliberately', 'lightly', 'gently', 'provisionally', 'experimentally', 'initially', 'hesitantly',
        'softly', 'increasingly', 'steadily', 'exploratorily', 'purposefully'],
      conjunctions: []
    }
  },
  syntaxPatterns: {
    rut: [
      "I {verb} this {adjective} {noun} every time I try to {verb}.",
      "This {noun} stops me cold; it’s too {adjective} to work through.",
      "I try to {verb}, but the {noun} turns into a {adjective} wall.",
      "I’m {verbGerund}, but this {noun} stays {adjective}.",
      "{otherSpeaker}, I’m stuck behind this {adjective} {noun}.",
      "I keep trying to {verb}, but the {noun} pushes back.",
      "It’s all {adjective}, so I can’t get the {noun} to move.",
      "Every attempt to {verb} hits the same {adjective} {noun}.",
      "I’m held up by this {noun}; it’s too {adjective} to shift.",
      "I try again, but the {noun} stays {adjective} and blocks the {verb}.",
      "{otherSpeaker}, I’m trying to push through what you said, but this {noun} stops me.",
      "Your point clashes with this {adjective} {noun} I keep hitting.",
      'I hear you, but "{theirUtterance}" doesn’t move this {noun} for me.',
      "{otherSpeaker}, I’m blocked and can’t {verb} the way your {theirStance} suggests.",
      "I’m pushing back on this {noun}, but your note doesn’t change how {adjective} it is."
    ],
    taste: [
      "With this {adjective} {noun}, I can {adverb} {verb} the direction we’re taking.",
      "I lean into a {adjective} sense of {noun} so I can {verb} with more intention.",
      "This {noun} feels {adjective} enough that I can {adverb} {verb} where we need to go.",
      "{otherSpeaker}, your {theirStance} note steadies my {noun} and helps me {verb}.",
      "I’m using a {adjective} {noun} to {adverb} {verb} our next step.",
      "As the {noun} becomes more {adjective}, I can {verb} with clearer structure.",
      "I trace a {adjective} {noun} here so my {verb} doesn’t drift.",
      "This {noun} holds a {adjective} outline that lets me {adverb} {verb}.",
      "When I sense this {adjective} {noun}, it helps me {verb} without losing coherence.",
      "{otherSpeaker}, your input adds a {adjective} contour to how I {verb}.",
      "A {adjective} {noun} emerges, and I {adverb} {verb} inside it.",
      "I keep shaping a {noun} that stays {adjective}, so the way I {verb} remains clean.",
      "{otherSpeaker}, your {theirStance} adds a clear angle to the {adjective} {noun}, and I’m integrating it into how I plan the next step of my {verb}.",
      'I’m using your "{theirUtterance}" to refine the structure around the {noun} and coordinate my {verb} more deliberately.',
      "Your input sharpens the {noun}, and I’m bringing that into the broader framework guiding my {verb}.",
      "{otherSpeaker}, your message gives the {adjective} {noun} more definition, and I’m organizing my response with that in mind.",
      "I’m evaluating your point as part of the {noun}, making sure my {verb} stays aligned with the direction it sets."
    ],
    growth: [
      "This {noun} is becoming significantly more {adjective}, and I’m adjusting my approach to {adverb} {verb} with greater clarity.",
      "I’m {adjective} momentum as the {noun} strengthens, and it’s helping me drive my {verb} further.",
      "{otherSpeaker}, your point {adjective} the {noun}, and it lets me push my {verb} in a more direct way.",
      "As the {adjective} {noun} develops, I’m using it to refine the direction of my {verb}.",
      "The {noun} is reaching a clearer stage, and I’m expanding how I {verb} to match that growth.",
      "I’m seeing the {noun} open up into something more {adjective}, and I’m adjusting my {adjective} {noun} to take advantage of it.",
      "The {noun} is strengthening, and it’s giving me more room to {adverb} {verb}.",
      "With this {adjective} {noun} emerging, I’m pushing my {verb} into a more defined trajectory.",
      "I’m working with the {noun} as it evolves, and it helps me set a more deliberate direction in my {verb}.",
      "The {noun} is expanding into something {adjective}, and I’m using that as a basis to {verb} more effectively.",
      "{otherSpeaker}, your {theirStance} strengthens the direction of this {adjective} {noun}, and I’m updating my {noun} accordingly.",
      'I’m using your "{theirUtterance}" to push this {noun} into a clearer trajectory.',
      "Your input is {adjective} the {noun}, and it helps me refine the next steps in how I {verb}.",
      "{otherSpeaker}, what you said reinforces the {adjective} momentum I’m aiming for.",
      "I’m {adjective} the {noun} more deliberately with the direction your point suggests."
    ],
    emerging: [
      "I’m seeing a more {adjective} {noun} take shape, and I’m starting to {verb} toward it.",
      "This {noun} is becoming clearer, so I’m {adverb} adjusting how I {verb}.",
      "There’s a more defined {noun} here, and I’m trying to move in that direction.",
      "{otherSpeaker}, your input sharpens the {noun} a bit for me.",
      "I’m getting a better sense of this {adjective} {noun}, and it’s guiding how I {verb}.",
      "The {noun} is settling into something more {adjective}, and I’m working with it.",
      "I’m noticing a {adjective} trend in the {noun}, so I’m starting to {verb} more directly.",
      "This {noun} has enough shape now for me to {verb} around it.",
      "A clearer {noun} is forming, and I’m {adverb} following the direction it points.",
      "I’m reading a more {adjective} signal in the {noun}, and it’s shifting how I {verb}.",
      "{otherSpeaker}, your point sharpens the {noun} and helps me {verb} more directly.",
      'Your "{theirUtterance}" gives me a clearer read on this {adjective} {noun}.',
      "I’m aligning my {adjective} {noun} with the direction your {theirStance} suggests.",
      "Your input adds structure to the {noun}, and I’m adjusting.",
      "{otherSpeaker}, what you said pushes this {noun} into a more {adjective} shape."
    ]
  },
  encodingConfig: {
    rut: {
      symbols: ['⟡', '◆', '⬒', '⬓', '⌖', '⌗', '⌁', '⌂'],
      alphabet: ALPHA
    },
    taste: {
      symbols: ['😋', '🍓', '🎯', '⭐', '🔱', '✨' , '👑'],
      alphabet: ALPHA
    },
    growth: {
      symbols: ['🤯', '🌹', '⚡', '🎁', '😎', '🌸', '📈', '🎢'],
      alphabet: ALPHA
    },
    emerging: {
      symbols: ['🤔', '💥', '💫', '>', '^', '⭐' , '🌟', '✨'],
      alphabet: ALPHA
    }
  }
}