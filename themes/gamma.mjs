import { ALPHA } from './shared.mjs'

export const GAMMA_THEME = {
  name: 'gamma',
  stateLexicons: {
    rut: {
      adjectives: [
        'heavy', 'spent', 'drained', 'sluggish', 'numb', 'static', 'inert', 'dulled',
        'dim', 'weary', 'brittle', 'flat', 'stiff', 'leaden', 'foggy', 'drowsy',
        'apathetic', 'blasé', 'jaded', 'listless', 'tired', 'glacial', 'sapped', 'faint'
      ],
      nouns: [
        'inertia', 'impasse', 'gridlock', 'standstill', 'rut', 'lockup', 'deadweight',
        'mire', 'torpor', 'apathy', 'lassitude', 'fatigue', 'burnout', 'slump',
        'plateau', 'stagnation', 'paralysis', 'limbo'
      ],
      verbs: [
        'stall', 'freeze', 'halt', 'bog', 'drag', 'sag', 'falter', 'flag', 'dawdle',
        'idle', 'hesitate', 'plod', 'trudge', 'wade', 'grind', 'stagnate', 'wither',
        'wilt', 'sap', 'slow'
      ],
      adverbs: [
        'heavily', 'slowly', 'dimly', 'weakly', 'wearily', 'listlessly', 'sluggishly',
        'numbly', 'dully', 'haltingly', 'reluctantly', 'faintly', 'barely', 'idly'
      ],
      conjunctions: ['though', 'yet', 'however', 'still', 'even so', 'nevertheless', 'nonetheless', 'but', 'even though', 'despite this']
    },
    taste: {
      adjectives: ['balanced', 'attuned', 'perceptive', 'composed', 'measured', 'subtle', 'harmonious',
        'observant', 'centered', 'even-toned', 'reflective', 'considered', 'gentle', 'steady', 'calibrated',
        'grounded-sensing', 'quietly-aligned', 'nuanced', 'temperate', 'open-framed'],
      nouns: ['framework', 'orientation', 'contour', 'throughline', 'pattern', 'scaffold', 'structure', 'shape',
        'outline', 'baseline', 'ethos', 'guiding cue', 'reference point', 'center', 'cadence', 'rhythm',
        'mapping', 'schema', 'lens', 'organizing thread'],
      verbs: ['orient', 'attune', 'have a sense of it', 'calibrate', 'balance', 'harmonize', 'soften', 'adjust', 'refine',
        'steady', 'center', 'trace', 'outline', 'shape', 'align', 'moderate', 'tune', 'clarify', 'filter', 'ground'],
      adverbs: ['gently', 'subtly', 'quietly', 'evenly', 'calmly', 'softly', 'carefully', 'attunely', 'steadily',
        'smoothly', 'delicately', 'moderately', 'lightly', 'thoughtfully', 'gradually', 'nuancedly', 'balancedly', 'harmoniously', 'openly', 'mindfully'],
      conjunctions: ['while', 'although', 'whereas', 'however', 'yet', 'nevertheless', 'nonetheless', 'even as',
        'at the same time', 'meanwhile']
    },
    growth: {
      adjectives: ['robust', 'durable', 'coherent', 'reliable', 'grounded', 'steady', 'integrated', 'stable',
        'resilient', 'structured', 'methodical', 'consistent', 'enduring', 'balanced', 'reinforced', 'solid',
        'persistent', 'systematic', 'sustained', 'well-formed'],
      nouns: ['cohesion', 'capacity', 'resilience', 'pattern', 'systems', 'coherence', 'continuity',
        'alignment', 'integration', 'exhibit', 'conceptual strength', 'emergent order', 'conception',
        'stability arc', 'drift', 'pattern', 'layer', 'mesh', 'evolving structure', 'formation'],
      verbs: ['deepen', 'strengthen', 'fortify', 'reinforce', 'consolidate', 'understand', 'amplify', 'refine',
        'stabilize', 'integrate', 'solidify', 'support', 'cultivate', 'develop', 'expand', 'clarify', 'harmonize',
        'organize', 'sustain', 'patternize'],
      adverbs: ['strongly', 'closely', 'firmly', 'thoroughly', 'progressively', 'persistently', 'steadily',
        'emerging', 'coherently', 'strengthening', 'stabilizing', 'increasingly', 'gradually',
        'organically', 'smoothly', 'methodically', 'intentionally', 'softening', 'consistently', 'reliably'],
      conjunctions: ['as', 'while', 'although', 'despite', 'consequently', 'moreover', 'therefore', 'thus', 'hence', 'insofar as']
    },
    emerging: {
      adjectives: ['encouraging', 'budding', 'incipient', 'developing', 'forming', 'tentative', 'faint', 'early',
        'delicate', 'subtle', 'fundamental', 'latent', 'fragile', 'provisional', 'transitional', 'unfolding', 'evolving',
        'awakening', 'improvisational', 'intuitive'],
      nouns: ['outline', 'signal', 'pattern', 'tendency', 'contour', 'shape', 'seed', 'thread', 'spark', 'concept',
        'impulse', 'hint', 'gesture', 'motif', 'idea', 'bridge', 'undertone', 'drift', 'evolution', 'formation'],
      verbs: ['make sense of it', 'notice', 'perceive', 'detect', 'glimpse', 'intuit', 'recognize', 'surface', 'stir', 'unfold',
        'bloom', 'generate', 'awaken', 'arise', 'emerge', 'manifest', 'appear', 'suggest', 'signal', 'coalesce'],
      adverbs: ['subtly', 'gradually', 'gently', 'quietly', 'slowly', 'softly', 'carefully', 'tentatively', 'delicately',
        'vaguely', 'faintly', 'increasingly', 'lightly', 'hesitantly', 'smoothly', 'naturally', 'organically', 'fluidly',
        'transitionally', 'incrementally'],
      conjunctions: []
    }
  },
  syntaxPatterns: {
    rut: [
      "I feel {adjective}, and this {noun} keeps me {adverb} trying to {verb}.",
      "It’s hard to read the {noun}; everything feels too {adjective} to {verb} clearly.",
      "I’m {adverb} working around this {adjective} {noun}.",
      "This {noun} is pretty {adjective}, so I’m not really able to {verb}.",
      "I try to {verb}, but the {noun} stays {adjective}.",
      "{otherSpeaker}, I notice it, but I’m still stuck in this {noun}.",
      "Everything is kind of {adjective}, and I only {adverb} {verb}.",
      "I see the {noun}, but I’m too {adjective} to do more than {verb}.",
      "I’m still slowed down by this {adjective} {noun}.",
      "I keep circling the same {noun} and just {adverb} trying to {verb}.",
      '{otherSpeaker}, I’m trying to read what you meant by "{theirUtterance}", but the {noun} feels too {adjective}.',
      "I get your point, but I’m still {adverb} sorting through this {adjective} {noun}.",
      "What you said shifts the {noun} a bit, but I’m still slow to {verb}.",
      "I’m noticing your {theirStance} take, {otherSpeaker}, but I’m stuck in this {noun}.",
      "Your message helps, but the {adjective} {noun} keeps me from responding clearly."
    ],
    taste: [
      "I’m noticing the {noun} organize into something more {adjective}, and I’m taking time to {adverb} {verb} in a way that fits that structure.",
      "There’s a clearer read on this {adjective} {noun}, and I’m mapping my {verb} around it so the overall direction stays coherent.",
      "{otherSpeaker}, your comment adds useful context, and it helps me line up a more {adjective} understanding of the {noun} as I {verb}.",
      "As this {noun} becomes more {adjective}, I’m adjusting the way I {verb} so it stays in sync with the pattern forming here.",
      "I’m getting a steadier outlook on the {noun}, and I’m refining my {verb} to match the level of nuance it’s starting to show.",
      "This {adjective} {noun} is giving me clearer reference points, and I’m using them to {adverb} {verb} with better consistency.",
      "I’m reading the {noun} in a more structured way now, and it’s helping me shape my {verb} with fewer gaps.",
      "The {noun} is developing a more {adjective} profile, and I’m adjusting so my {verb} supports that direction.",
      "I’m picking up on a more organized {noun}, and it’s guiding me to {adverb} {verb} with more alignment.",
      "As the {noun} shifts into something {adjective}, I’m updating my interpretation so my {verb} stays accurate.",
      "{otherSpeaker}, your {theirStance} gives me a better frame for interpreting the {adjective} {noun} as I refine how I {verb}.",
      'I’m taking in your "{theirUtterance}" and adjusting how I map the {noun}.',
      "Your input helps me read the {noun} more coherently, and I’m aligning my {verb} with that.",
      "{otherSpeaker}, your point helps clarify the {adjective} structure developing in the {noun}.",
      "I’m integrating your perspective so the {noun} fits more cleanly with how I {verb}."
    ],
    growth: [
      "The {noun} is becoming more {adjective}, and I’m noticing how this enables me to {verb} with more accuracy.",
      "I’m seeing the {noun} clarify into something workable, and I’m adjusting my {noun} to match.",
      "{otherSpeaker}, your comment adds definition to the {noun}, helping me refine how I {verb}.",
      "As this {adjective} {noun} forms, I’m learning how to integrate it into what I’m doing.",
      "I can see a more coherent {noun} emerging, and I’m {adverb} improving the way I {verb} around it.",
      "The {noun} is reaching a more {adjective} stage, so I’m adjusting my approach to {verb}.",
      "I’m mapping the {noun} as it becomes more {adjective}, and it’s changing how I move forward.",
      "This {noun} is settling into a pattern, and I’m aligning my {verb} with that pattern.",
      "I’m refining how I {verb} as the {noun} becomes more {adjective} and predictable.",
      "The {noun} is {adjective} in a steady way, and my {verb} is adapting to it.",
      "{otherSpeaker}, your {theirStance} gives me more context for refining the {noun}.",
      'I’m adjusting how I {verb} based on what you meant in "{theirUtterance}".',
      "Your input helps me interpret this {adjective} {noun} with more precision.",
      "I’m {adjective} your point so the {noun} fits better with how I {verb}.",
      "{otherSpeaker}, the way you framed it helps me update the {noun} more clearly."
    ],
    emerging: [
      "I’m starting to notice a {adjective} kind of {noun}, so I’m trying to {verb} around it.",
      "There’s a slightly {adjective} {noun} here, and I’m seeing how to {verb} with it.",
      "I can pick up a {adjective} change in the {noun}, so I’m just {adverb} trying to {verb}.",
      "{otherSpeaker}, something in what you said gives me a {adjective} sense of the {noun}.",
      "I keep noticing a {adjective} shift in the {noun}, so I’m trying to {verb} without pushing.",
      "There’s a {adjective} pattern forming, and I’m {adverb} adjusting the way I {verb}.",
      "I’m aware of a slightly {adjective} {noun}, and I’m testing how I {verb} in response.",
      "Your comment, {otherSpeaker}, makes the {noun} a bit clearer, so I’m {adverb} trying to {verb}.",
      "I can feel a {adjective} direction in the {noun}, and I’m working out how to {verb}.",
      "I’m getting a small {adjective} read on the {noun}, so I’m {adverb} seeing what it means for how I {verb}.",
      "There’s a bit of a {adjective} shift happening, and I’m trying to {verb} with it steadily.",
      "I’m picking up a {adjective} change in the {noun} and adjusting the way I {verb} around it.",
      '{otherSpeaker}, something in "{theirUtterance}" shifts how I’m reading the {noun}.',
      "Your {theirStance} makes this {adjective} {noun} stand out a bit more.",
      "I’m adjusting how I {verb} after hearing what you said.",
      "Your message helps me understand the {noun} in a slightly more {adjective} way.",
      "{otherSpeaker}, I’m picking up a small change in the {noun} from what you shared."
    ]
  },
  encodingConfig: {
    rut: {
      symbols: ['·', '•', '◦', '.', '@', '#', '$', '!'],
      alphabet: ALPHA
    },
    taste: {
      symbols: ['🧿', '🔥', '🌳', '🌊', '🌋', '🏛', '🛡', '🫟'],
      alphabet: ALPHA
    },
    growth: {
      symbols: ['🚀', '🏔', '📊', '💡', '🌀', '⏳', '🌅', '🔮'],
      alphabet: ALPHA
    },
    emerging: {
      symbols: ['🔁', '-', '+', '=', '🐚', '🫧', '🌘', '🦠'],
      alphabet: ALPHA
    }
  }
}
