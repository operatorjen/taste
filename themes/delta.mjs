import { ALPHA } from './shared.mjs'

export const DELTA_THEME = {
  name: 'delta',
  stateLexicons: {
    rut: {
      adjectives: ['hesitant', 'wary', 'uneasy', 'tense', 'restrained', 'inhibited', 'guarded', 'doubtful',
        'timid', 'uncertain', 'reluctant', 'stagnant', 'brittle', 'weary', 'drained', 'cautious',
        'apprehensive', 'indecisive', 'tentative', 'withdrawn'],
      nouns: ['inertia', 'impasse', 'standstill', 'blockage', 'deadlock', 'stagnation', 'fatigue',
        'resistance', 'hesitation', 'limbo', 'pause', 'tension', 'constraint', 'burden', 'weight',
        'barrier', 'trap', 'doldrums', 'slump', 'paralysis'],
      verbs: ['stall', 'freeze', 'halt', 'drag', 'falter', 'hesitate', 'waver', 'dawdle', 'linger',
        'delay', 'stumble', 'slump', 'weaken', 'retreat', 'withdraw', 'recoil', 'stiffen', 'cling',
        'pause', 'stop'],
      adverbs: ['heavily', 'slowly', 'wearily', 'awkwardly', 'weakly', 'reluctantly', 'haltingly', 'numbly',
        'dully', 'faintly', 'idly', 'cautiously', 'anxiously', 'hesitantly', 'timidly', 'tentatively',
        'uncertainly', 'uneasily', 'warily', 'apathetically'],
      conjunctions: ['though', 'yet', 'nevertheless', 'however', 'still', 'but', 'even so', 'nonetheless',
        'despite this', 'regardless']
    },
    taste: {
      adjectives: ['balanced', 'assured', 'composed', 'steady', 'measured', 'softened', 'tempered', 'settled',
        'grounded', 'quiet', 'centering', 'calming', 'soothing', 'gentle', 'stable', 'restrained', 'moderating',
        'harmonizing', 'even', 'collected'],
      nouns: ['framework', 'baseline', 'orientation', 'habit', 'scaffold', 'throughline', 'structure', 'ethos',
        'center', 'ground', 'balance point', 'anchor', 'rhythm', 'cadence', 'pattern', 'support', 'stability',
        'contour', 'thread', 'steadying form'],
      verbs: ['orient', 'align', 'temper', 'steady', 'settle', 'soften', 'ground', 'balance', 'moderate', 'center',
        'calm', 'stabilize', 'soothe', 'ease', 'compose', 'recenter', 'support', 'anchor', 'adjust', 'attune'],
      adverbs: ['steadily', 'calmly', 'quietly', 'gently', 'softly', 'evenly', 'smoothly', 'deliberately',
        'reliably', 'consistently', 'moderately', 'patiently', 'slowly', 'carefully', 'stably', 'groundedly',
        'temporarily', 'gradually', 'temperately', 'tactically'],
      conjunctions: ['while', 'although', 'whereas', 'nevertheless', 'consequently', 'furthermore', 'however',
        'yet', 'even so', 'nonetheless']
    },
    growth: {
      adjectives: ['deepening', 'maturing', 'cohering', 'solidifying', 'fortifying', 'grounding', 'stabilizing',
        'reconstituting', 're-centering', 'strengthening', 'settling', 'developing', 'rooting', 'anchoring',
        'consolidating', 'reinforcing', 'substantial', 'enduring', 'persistent', 'slow-growing'],
      nouns: ['cohesion', 'capacity', 'resilience', 'restoration', 'reconstitution', 'ground', 'foundation',
        'rooting', 'anchoring', 'stability', 'integration', 'continuity', 'endurance', 'persistence', 'substance',
        'structure', 'framework', 'slow build', 'deepening layer', 'steady formation'],
      verbs: ['deepen', 'settle', 'stabilize', 'anchor', 'root', 'consolidate', 'fortify', 'reinforce', 'cohere',
        'reconstitute', 'restore', 'ground', 'strengthen', 'engage', 'solidify', 'sustain', 'integrate', 'mature',
        'steady', 'absorb'],
      adverbs: ['steadily', 'slowly', 'firmly', 'deeply', 'gradually', 'quietly', 'gently', 'persistently',
        'subtly', 'consistently', 'reliably', 'incrementally', 'durably', 'enduringly', 'patiently', 'cumulatively',
        'methodically', 'solidly', 'rootedly', 'groundedly'],
      conjunctions: ['as', 'while', 'although', 'despite', 'consequently', 'moreover', 'therefore', 'hence', 'even as', 'in turn']
    },
    emerging: {
      adjectives: ['faint', 'fragile', 'delicate', 'tentative', 'subtle', 'nascent', 'developing', 'budding', 'subtle',
        'soft', 'selectively', 'early', 'gentle', 'uncertain', 'wavering', 'shy', 'hesitant', 'quiet',
        'present', 'inkling of a'],
      nouns: ['insinuation', 'trace', 'flicker', 'hint', 'glimmer', 'cybernetic ghost', 'feedback loop', 'reminder', 'outline', 'system',
        'murmur', 'seed', 'thread', 'tremor', 'suggestion', 'impression', 'soft signal', 'embryo', 'faint shape',
        'subtle cue'],
      verbs: ['observe', 'tell', 'flicker', 'tremble', 'stir', 'drift', 'hover', 'soften', 'enhance', 'waver',
        'murmur', 'surface', 'hint', 'suggest', 'fade', 'oscillate', 'breathe', 'rise faintly', 'approach softly',
        'barely form'],
      adverbs: ['softly', 'quietly', 'faintly', 'gently', 'carefully', 'slowly', 'cautiously', 'eventually', 'tentatively',
        'hesitantly', 'uncertainly', 'lightly', 'barely', 'waveringly', 'delicately', 'shyly', 'ironically', 'gradually',
        'thinly', 'haltingly'],
      conjunctions: []
    }
  },
  syntaxPatterns: {
    rut: [
      "I feel {adjective} with this {noun} and I just {adverb} {verb}.",
      "This {noun} is too {adjective} for me to really {verb} right now.",
      "I’m still {adverb} trying to {verb} through this {adjective} {noun}.",
      "{otherSpeaker}, I get it, but I’m stuck in this {adjective} {noun}.",
      "I keep hitting this {noun} and end up {adverb} trying to {verb}.",
      "Everything feels {adjective}, so I can only {adverb} {verb} a little.",
      "This {adjective} {noun} keeps me from doing much more than {verb}.",
      "I notice the {noun}, but I’m too {adjective} to really {verb}.",
      "{otherSpeaker}, I hear you, but I’m still {adverb} in this {noun}.",
      "I try to {verb}, but the {noun} stays too {adjective} to work around.",
      "{otherSpeaker}, I hear you, but I’m still in this {adjective} {noun}.",
      "Even after what you said, I’m too {adjective} to really {verb}.",
      '{otherSpeaker}, I’m {adverb} working through what you said: "{theirUtterance}".',
      "Your {theirStance} point makes sense, but this {noun} keeps me slow.",
      "I’m trying to respond, {otherSpeaker}, but I’m still caught in this {adjective} {noun}."
    ],
    taste: [
      "With this {adjective} {noun} settling in, I’m taking a slower, more deliberate approach so I can {adverb} {verb} without losing stability.",
      "I’m keeping a steady handle on the {noun}, which is becoming more {adjective}, and that’s helping me stay balanced as I {verb}.",
      "{otherSpeaker}, your input supports a grounded {noun}, and I’m integrating it into how I {verb} so the whole thing stays even.",
      "This {noun} is developing into something {adjective}, and I’m adjusting my pace to {adverb} {verb} in a way that stays consistent.",
      "I’m focusing on a more {adjective} sense of the {noun} so I can shape my {verb} with enough care to keep everything steady.",
      "A clearer {noun} is forming, and I’m pacing myself to {verb} in a way that keeps things smooth.",
      "I’m working with this {adjective} {noun}, and it’s guiding me to {adverb} {verb} without unnecessary tension.",
      "As the {noun} becomes more {adjective}, I’m checking my own approach so I can {verb} in a stable way.",
      "This {adjective} {noun} gives me a calmer frame to {verb}, and I’m adjusting slowly to stay aligned.",
      "I’m {adjective} myself in the {noun} as it settles, and that’s shaping how I {adverb} {verb} going forward.",
      "{otherSpeaker}, your {theirStance} adds a helpful angle to this {adjective} {noun}, and I’m adjusting my {verb} to keep things steady.",
      'I’m using your "{theirUtterance}" to refine how I structure the {noun} as I {verb}.',
      "Your message helps me maintain a smoother approach to the {adjective} {noun}.",
      "{otherSpeaker}, your input supports a calmer interpretation of the {noun}, and I’m adapting my {verb}.",
      "Your perspective adds context to the {noun}, and I’m integrating it into how I {verb}."
    ],
    growth: [
      "The {noun} is becoming more {adjective}, and I’m taking my time to {adverb} {verb} in a way that feels stable.",
      "I’m settling into a steadier {noun}, and it’s helping me adjust how I {verb} without rushing.",
      "{otherSpeaker}, what you shared supports a more {adjective} {noun}, and I’m working with that.",
      "This {noun} is getting clearer and more {adjective}, and I’m aligning my {verb} with it gradually.",
      "I can feel the {noun} stabilizing, and it’s guiding me to {adverb} {verb} more consistently.",
      "As the {noun} grows more {adjective}, I’m able to keep my {verb} steady.",
      "I’m finding a more grounded sense of the {noun}, and I’m adjusting how I {verb} to match it.",
      "There’s a developing {adjective} quality to this {noun}, and I’m shaping my response around it.",
      "I’m recognizing a slower, more {adjective} form of this {noun}, and it’s changing how I {verb}.",
      "This {noun} is gaining stability, and I’m {adverb} updating the way I {verb} to stay aligned with it.",
      "{otherSpeaker}, your perspective supports this {adjective} {noun}, and I’m adjusting my {verb} around it.",
      'I’m integrating your "{theirUtterance}" into how I {verb} so things stay steady.',
      "Your {theirStance} helps me maintain a stable approach to the {noun}.",
      "I’m adapting my {noun} as your input clarifies the {adjective} {noun}.",
      "{otherSpeaker}, your message contributes to the way this {noun} is settling."
    ],
    emerging: [
      "I’m starting to see a {adjective} {noun}, so I’m {adverb} trying to {verb} with it.",
      "There’s a small {noun} forming, and I’m figuring out how to {verb}.",
      "I notice a slightly {adjective} {noun}, so I’m adjusting how I {verb}.",
      "{otherSpeaker}, your point makes the {noun} a bit clearer for me.",
      "A {adjective} shift in the {noun} is showing up, and I’m {adverb} working with it.",
      "I’m trying to understand this {adjective} {noun} as I {verb}.",
      "I can see the {noun} changing, and I’m {adverb} trying to respond.",
      "There’s a {adjective} outline here, and I’m checking how to {verb} with it.",
      "I’m noticing a {adjective} change in the {noun}, so I’m adjusting.",
      "This {noun} is developing a bit, and I’m {adverb} testing how I {verb} around it.",
      "{otherSpeaker}, your message helps me see a {adjective} shift in the {noun}.",
      'I’m taking your "{theirUtterance}" into account as I try to {verb}.',
      "Your {theirStance} view makes the {noun} a bit clearer for me.",
      "{otherSpeaker}, I notice a small change in the {noun} after what you said.",
      "Your input adds a {adjective} angle to how I’m trying to {verb}."
    ]
  },
  encodingConfig: {
    rut: {
      symbols: ['·', '•', '◦', '.', '*', '#', '⤷', '!'],
      alphabet: ALPHA
    },
    taste: {
      symbols: ['▲', '⚙️', '💅', '⤴', '✦', '🏛', '🛡', '★'],
      alphabet: ALPHA
    },
    growth: {
      symbols: ['🎬', '🏔', '🔍︎', '📶', '🧱', '🔒', '💬', '👥'],
      alphabet: ALPHA
    },
    emerging: {
      symbols: ['🧩', '-', '+', '=', '▶', '🌗', '3', '4'],
      alphabet: ALPHA
    }
  }
}
