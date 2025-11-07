import { ALPHA } from './shared.mjs'

export const BETA_THEME = {
  name: 'beta',
  stateLexicons: {
    rut: {
      adjectives: ['drained', 'sluggish', 'weary', 'dull', 'numb', 'inert', 'static', 'flat', 'brittle', 'dim',
        'fatigued', 'apathetic', 'listless', 'tired', 'foggy', 'unmotivated', 'disengaged', 'sapped', 'faint', 'glacial'],
      nouns: ['inertia', 'fatigue', 'slump', 'standstill', 'torpor', 'burnout', 'plateau', 'mire', 'lassitude',
        'stagnation', 'impasse', 'limbo', 'drag', 'decline', 'weariness', 'pause', 'resistance', 'drain', 'exhaustion',
        'deadweight'],
      verbs: ['stall', 'drag', 'falter', 'sag', 'slow', 'dawdle', 'linger', 'wilt', 'fade', 'weaken', 'slump', 'sink',
        'droop', 'idle', 'pause', 'stumble', 'waver', 'hesitate', 'deplete', 'wither'],
      adverbs: ['slowly', 'wearily', 'heavily', 'weakly', 'dimly', 'sluggishly', 'listlessly', 'dully', 'reluctantly',
        'faintly', 'idly', 'haltingly', 'tiredly', 'apathetically', 'numbly', 'lazily', 'drearily', 'limply', 'barely',
        'passively'],
      conjunctions: ['though', 'yet', 'however', 'nevertheless', 'still', 'but', 'even so', 'nonetheless', 'despite that', 'regardless']
    },
    taste: {
      adjectives: ['balanced', 'focused', 'composed', 'sound', 'even', 'steady', 'measured', 'reliable',
        'consistent', 'grounded', 'structured', 'orderly', 'harmonized', 'stable', 'clear', 'methodical',
        'level', 'disciplined', 'tempered', 'cohesive'],
      nouns: ['framework', 'throughline', 'scaffold', 'baseline', 'ethos', 'orientation', 'structure', 'foundation',
        'schema', 'model', 'pattern', 'system', 'grid', 'matrix', 'blueprint', 'guideline', 'reference frame',
        'order', 'format', 'layout'],
      verbs: ['orient', 'align', 'organize', 'support', 'underpin', 'clarify', 'compose', 'structure', 'stabilize',
        'balance', 'coordinate', 'refine', 'order', 'arrange', 'integrate', 'adjust', 'harmonize', 'standardize',
        'systematize', 'ground'],
      adverbs: ['firmly', 'reliably', 'steadily', 'deliberately', 'cleanly', 'consistently', 'methodically',
        'smoothly', 'carefully', 'calmly', 'evenly', 'coherently', 'clearly', 'efficiently', 'precisely',
        'stably', 'practically', 'systematically', 'dependably', 'soundly'],
      conjunctions: ['furthermore', 'nevertheless', 'whereas', 'however', 'though', 'yet', 'moreover',
        'in addition', 'alternatively', 'nonetheless']
    },
    growth: {
      adjectives: ['robust', 'durable', 'coherent', 'reliable', 'familiar', 'grounded', 'resolute', 'stable', 'focused',
        'integrated', 'consistent', 'resilient', 'structured', 'steady', 'firm', 'balanced', 'mature', 'methodical',
        'sustained', 'adaptive'],
      nouns: ['capacity', 'integrity', 'endurance', 'resilience', 'stability', 'foundation', 'structure', 'system',
        'continuity', 'rigor', 'discipline', 'persistence', 'momentum', 'framework', 'consistency', 'balance', 'progress',
        'cohesion', 'expansion', 'mastery'],
      verbs: ['strengthen', 'reinforce', 'refine', 'consolidate', 'stabilize', 'sustain', 'fortify', 'develop', 'cultivate',
        'expand', 'advance', 'integrate', 'optimize', 'enhance', 'solidify', 'extend', 'mature', 'support', 'amplify', 'evolve'],
      adverbs: ['strongly', 'firmly', 'steadily', 'consistently', 'reliably', 'thoroughly', 'deliberately', 'progressively', 'intentionally', 'persistently', 'systematically', 'carefully', 'continuously', 'strategically', 'efficiently',
        'methodically', 'effectively', 'solidly', 'purposefully', 'dependably'],
      conjunctions: ['therefore', 'consequently', 'thus', 'hence', 'moreover', 'while', 'as a result', 'accordingly', 'so that', 'then']
    },
    emerging: {
      adjectives: ['nascent', 'developing', 'forming', 'incipient', 'budding', 'early', 'tentative',
        'provisional', 'emergent', 'initial', 'growing', 'unfolding', 'gradual', 'subtle', 'formative',
        'softening', 'opening', 'coalescing', 'shaping', 'awakening'],
      nouns: ['outline', 'pattern', 'signal', 'tendency', 'contour', 'shape', 'seed', 'thread', 'trace',
        'incipience', 'formation', 'prototype', 'draft', 'model', 'structure', 'idea',
        'impulse', 'cue', 'hint', 'concept'],
      verbs: ['sense', 'notice', 'perceive', 'detect', 'glimpse', 'intuit', 'recognize', 'surface', 'cohere',
        'form', 'emerge', 'shape', 'gather', 'collect', 'develop', 'unfold', 'suggest', 'signal', 'indicate',
        'coalesce'],
      adverbs: ['subtly', 'gradually', 'gently', 'quietly', 'slowly', 'softly', 'carefully', 'deliberately',
        'steadily', 'increasingly', 'smoothly', 'naturally', 'organically', 'lightly', 'tentatively',
        'cautiously', 'methodically', 'progressively', 'coherently', 'incrementally'],
      conjunctions: ['while', 'as', 'although', 'meanwhile', 'whereas', 'even as', 'just as', 'though', 'yet', 'however']
    },
  },
  syntaxPatterns: {
    rut: [
      "This {noun} is too {adjective} for me to {verb} right now.",
      "I’m {adverb} trying to work through this {adjective} {noun}.",
      "I keep slowing down when I hit this {noun}.",
      "The {noun} feels {adjective}, so I only {adverb} {verb}.",
      "I’m stuck in this {noun} and can’t keep the pace to {verb}.",
      "{otherSpeaker}, I’m trying, but the {adjective} {noun} drags everything out.",
      "This {noun} is wearing me down; I just {adverb} {verb}.",
      "I lose momentum every time the {noun} turns {adjective}.",
      "I try to {verb}, but the {noun} keeps flattening out.",
      "Everything slows when I hit this {adjective} {noun}.",
      "{otherSpeaker}, I get your point, but this {adjective} {noun} keeps slowing me down.",
      "I’m trying to apply your {theirStance}, but the {noun} is still too {adjective}.",
      '"{theirUtterance}" makes sense, but I don’t have the energy to {verb} through this.',
      "I’m working with what you said, {otherSpeaker}, but the {adjective} {noun} holds me back.",
      "Your input helps, but I’m still {adverb} stuck in this {noun}."
    ],
    taste: [
      "I’m working with this {adjective} {noun} in a steady way, and it’s helping me refine how I {adverb} {verb} while keeping everything reliable.",
      "The {noun} is forming into something more {adjective}, and I’m using that structure to guide the next steps of how I {verb}.",
      "{otherSpeaker}, your point contributes to a clearer {noun}, and I’m building that into my approach so my {verb} stays consistent.",
      "I’m organizing around this {adjective} {noun}, making small adjustments so I can {adverb} {verb} without introducing noise.",
      "This {noun} has enough structure now for me to use it as a reference, and I’m aligning my {verb} with it.",
      "I’m noticing the {noun} settle into something more {adjective}, and I’m refining my process so my {verb} reflects that stability.",
      "As this {adjective} {noun} becomes clearer, I’m integrating it step by step so my {verb} stays grounded.",
      "Your input, {otherSpeaker}, helps clarify the {noun}, and I’m folding it directly into how I {verb}.",
      "I’m keeping the {noun} organized so I can {adverb} {verb} in a way that maintains a clean structure.",
      "The {noun} is forming reliably, and I’m updating my {verb} to match that sense of consistency.",
      "{otherSpeaker}, your {theirStance} contributes to the organization of this {adjective} {noun}, and I’m folding that into my {verb}.",
      'I’m using your "{theirUtterance}" as reference while I keep the {noun} structured.',
      "Your input helps me maintain a consistent approach to the {adjective} {noun}.",
      "{otherSpeaker}, your message sharpens the framework of the {noun}, and I’m updating my {verb}.",
      "I’m integrating your point so the structure of the {noun} supports my {verb} more reliably."
    ],
    growth: [
      "This {noun} is becoming noticeably more {adjective}, and I’m methodically updating how I {verb} to match it.",
      "I’m building on the {noun} as it strengthens, and it’s helping me keep my {verb} consistent.",
      "{otherSpeaker}, your input supports a clearer {noun}, and it contributes to how I refine my {verb}.",
      "As this {adjective} {noun} develops, I’m adjusting step by step to maintain stability.",
      "I’m noticing the {noun} become more reliable, and I’m shaping my {verb} around that consistency.",
      "The {noun} is getting more {adjective}, and it’s improving how I {adverb} {verb}.",
      "This growing {noun} gives me better structure to update my {verb}.",
      "I’m working with {noun} as it strengthens and becoming more deliberate in how I {verb}.",
      "The {noun} is forming a {adjective} {noun}, and it’s influencing how I approach my {noun}.",
      "As the {noun} matures into something {adjective}, my {verb} is becoming better defined.",
      "{otherSpeaker}, I’m incorporating your {theirStance} into how I’m shaping this {adjective} {noun}.",
      'Your "{theirUtterance}" gives me a more consistent basis for my {verb}.',
      "I’m adjusting the structure of the {noun} based on what you shared.",
      "Your point helps firm up the {adjective} {noun}, and I’m aligning my {verb} with it.",
      "{otherSpeaker}, your input supports the stability I need to refine the {noun}."
    ],
    emerging: [
      "A basic {noun} is coming together, and I’m {adverb} learning how to {verb} with it.",
      "This {noun} is becoming a little more {adjective}, and I’m adjusting.",
      "I’m organizing around this {adjective} {noun} as it forms.",
      "{otherSpeaker}, your perspective helps me get a cleaner sense of the {noun}.",
      "The {noun} has a slight structure now, and I’m working it into how I {verb}.",
      "I’m starting to understand this {adjective} {noun} and what it means for my {verb}.",
      "The {noun} is becoming easier to read, so I’m {adverb} shifting how I {verb}.",
      "I’m getting a more stable sense of this {adjective} {noun}.",
      "The {noun} is organizing enough for me to adjust my {verb}.",
      "I’m seeing a small but {adjective} shape to the {noun}, and I’m responding to it.",
      "{otherSpeaker}, your {theirStance} helps me organize this {adjective} {noun}.",
      'I’m factoring in your "{theirUtterance}" as I try to {verb} with more consistency.',
      "Your point adds a bit more shape to the {noun}.",
      "{otherSpeaker}, I’m updating my read on the {noun} after what you shared.",
      "Your input helps me interpret the {adjective} {noun} more clearly."
    ]
  },
  encodingConfig: {
    rut: {
      symbols: ['~', '≈', '↗', '↕', '⋰', '⋱', '⟲', '⟳'],
      alphabet: ALPHA
    },
    taste: {
      symbols: ['⟡', '◆', '⬒', '⬓', '⌖', '⌗', '⌁', '⌂'],
      alphabet: ALPHA
    },
    growth: {
      symbols: ['⛰', '🏔', '🌳', '🌐', '🌲', '💭', '🪴', '🌿'],
      alphabet: ALPHA
    },
    emerging: {
      symbols: ['🤔', '💥', '💫', '>', '^', '⭐' , '🌟', '✨'],
      alphabet: ALPHA
    }
  }
}
