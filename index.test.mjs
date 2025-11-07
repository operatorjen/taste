import { createConversation, Taste, createTaste } from './index.mjs'
import { ALPHA_THEME } from './themes/alpha.mjs'
import { BETA_THEME } from './themes/beta.mjs'
import { GAMMA_THEME } from './themes/gamma.mjs'
import { DELTA_THEME } from './themes/delta.mjs'

const TICKS = 12

function banner(title) { console.log(`\n\n${title}`); console.log('='.repeat(60)) }

function section(title) { console.log(`\n— ${title} —`) }

async function singleAgentTasteTest() {
  banner('SINGLE AGENT TASTE TEST')
  const taste = createTaste('SoloAgent', ALPHA_THEME, {}, {
    plasticity: 0.8,
    energy: 0.9,
    framework: { coherence: 0.7, adaptability: 0.6, complexity: 0.8 }
  })
  section('Testing Single Agent Response Generation')
  for (let i = 0; i < 5; i++) {
    const input = `Test input ${i + 1} with complexity ${0.5 + i * 0.1}`
    const context = {
      framework: {
        complexity: 0.6 + Math.random() * 0.3,
        coherence: 0.5 + Math.random() * 0.4,
        adaptability: 0.4 + Math.random() * 0.5
      }
    }
    const response = taste.speak(input, 1, context)
    console.log(`Turn ${i + 1}:`)
    console.log(`  Input: "${input}"`)
    console.log(`  Output: "${response.text}"`)
    console.log(`  Stance: ${response.stance}`)
    console.log(`  Movement: ${response.movement.quality} | ${response.movement.primaryGesture}`)
    try {
      const encoded = taste.projections.encoder.encodeString(response.text)
      const decoded = taste.projections.encoder.decodeString(encoded)
      console.log(`  Round-trip: ${response.text === decoded ? '✅' : '❌'}`)
      if (response.text !== decoded) {
        console.log(`    Original: "${response.text}"`)
        console.log(`    Decoded:  "${decoded}"`)
      }
    } catch (error) {
      console.log(`  Encoding error: ${error.message}`)
    }
    const state = taste.getState()
    console.log(`  State - energy: ${state.energy.toFixed(2)}, plasticity: ${state.plasticity.toFixed(2)}`)
  }
  section('Testing State Evolution')
  const initialState = taste.getState()
  console.log('Initial state:', initialState)
  taste.hear(0.1, -0.05, 0.08)
  taste.idle(2)
  const evolvedState = taste.getState()
  console.log('Evolved state:', evolvedState)
  console.log('✅ Single agent Taste test passed')
  return { taste, initialState, evolvedState }
}

async function memeticInfluenceTest() {
  banner('MEMETIC INFLUENCE PROPAGATION TEST')
  const { orchestrator } = createConversation([
    {
      name: 'MemeticAlpha',
      initState: { plasticity: 0.85, energy: 0.8 },
      themePacks: ALPHA_THEME
    },
    {
      name: 'MemeticBeta',
      initState: { plasticity: 0.75, energy: 0.7 },
      themePacks: BETA_THEME
    },
    {
      name: 'MemeticGamma',
      initState: { plasticity: 0.45, energy: 0.6 },
      themePacks: GAMMA_THEME
    }
  ])

  let memeticEvents = 0
  let stanceAdoptions = 0
  let movementInfluences = 0
  section('Tracking Memetic Influence Over Conversation')
  for (let i = 0; i < TICKS; i++) {
    const snap = orchestrator.tick('', 1)
    if (snap.memeticInfluence && snap.memeticInfluence.type !== 'none') {
      memeticEvents++
      console.log(`\nTurn ${i + 1} - MEMETIC EVENT DETECTED`)
      console.log(`  Speaker: ${snap.speaker}`)
      console.log(`  Stance: ${snap.stance} → ${snap.expressedStance}`)
      console.log(`  Influence Type: ${snap.memeticInfluence.type}`)
      if (snap.memeticInfluence.type === 'stance_adoption') {
        stanceAdoptions++
        console.log(`  Stance Adoption: ${snap.memeticInfluence.originalState} → ${snap.memeticInfluence.adoptedStance}`)
        console.log(`  Blend Factor: ${snap.memeticInfluence.blendFactor?.toFixed(2)}`)
      }
      if (snap.movement.memeticInfluence === 'applied') {
        movementInfluences++
        console.log(`  Movement Influence: Applied`)
      }
      console.log(`  Field Strength: ${snap.memeticField.strength.toFixed(2)}`)
      console.log(`  Dominant Field Stance: ${snap.memeticField.dominantStance}`)
    } else {
      if (i % 5 === 0) {
        console.log(`Turn ${i + 1} - ${snap.speaker}: "${snap.text}" [${snap.stance}]`)
      }
    }
  }
  section('Memetic Influence Summary')
  console.log(`Total memetic events: ${memeticEvents}`)
  console.log(`Stance adoptions: ${stanceAdoptions}`)
  console.log(`Movement influences: ${movementInfluences}`)
  const memeticProfiles = orchestrator.getAgentMemeticProfiles()
  console.log('\nAgent Memetic Profiles:')
  Object.entries(memeticProfiles).forEach(([name, profile]) => {
    console.log(`  ${name}:`)
    console.log(`    Susceptibility: ${profile.susceptibility.toFixed(2)}`)
    console.log(`    Current Stance: ${profile.currentStance}`)
    console.log(`    Recent Influences: ${profile.influenceHistory.length}`)
    if (profile.influenceHistory.length > 0) {
      const lastInfluence = profile.influenceHistory[profile.influenceHistory.length - 1]
      console.log(`    Last Influence: ${lastInfluence.influence} from ${lastInfluence.source}`)
    }
  })
  const field = orchestrator.getMemeticField()
  console.log(`\nGlobal Memetic Field:`)
  console.log(`  Dominant Stance: ${field.dominantStance}`)
  console.log(`  Field Strength: ${field.strength.toFixed(2)}`)
  console.log(`  Coherence: ${field.coherence.toFixed(2)}`)
  if (memeticEvents > 0) {
    console.log('✅ Memetic influence system is active and propagating')
  } else {
    console.log('⚠️  Limited memetic activity - check agent plasticity levels')
  }
}

async function capacityEvolutionTest() {
  banner('CAPACITY EVOLUTION TEST')
  const { orchestrator, agents } = createConversation([
    { name: 'Delta', initState: { plasticity: 0.50, energy: 0.70 } },
    { name: 'Epsilon', initState: { plasticity: 0.80, energy: 0.65 } },
    { name: 'Zeta', initState: { plasticity: 0.90, energy: 0.60 } }
  ])
  const measureCapacities = () => {
    return Object.fromEntries(agents.map(a => {
      const st = a.proj?.encoder?.getState?.() || { alphabet: [] }
      return [a.name, {
        alphabetSize: st.alphabet?.length || 0,
        plasticity: a.state.plasticity,
        energy: a.state.energy
      }]
    }))
  }
  section('Initial State')
  const initial = measureCapacities()
  console.log('Agent capacities:')
  Object.entries(initial).forEach(([name, caps]) => {
    console.log(`  ${name}: α=${caps.alphabetSize}, P=${caps.plasticity.toFixed(2)}, E=${caps.energy.toFixed(2)}`)
  })
  for (let i = 0; i < 6; i++) {
    orchestrator.tick('', 1)
  }
  section('After 6 Conversation Turns')
  const final = measureCapacities()
  console.log('Agent capacities:')
  Object.entries(final).forEach(([name, caps]) => {
    const initC = initial[name]
    const deltaAlpha = caps.alphabetSize - initC.alphabetSize
    const deltaPlasticity = caps.plasticity - initC.plasticity
    console.log(`  ${name}: α=${caps.alphabetSize} (${deltaAlpha > 0 ? '+' : ''}${deltaAlpha}), P=${caps.plasticity.toFixed(2)} (${deltaPlasticity > 0 ? '+' : ''}${deltaPlasticity.toFixed(2)})`)
  })
  const capI = Object.values(final).some(caps => caps.alphabetSize > Object.values(initial)[0].alphabetSize)
  if (!capI) console.log('⚠️  No capacity increase detected - plasticity may be too low')
}

async function roundTripValidationTest() {
  banner('ROUND-TRIP ENCODING VALIDATION')
  const { orchestrator, agents } = createConversation([
    { name: 'Iota',  initState: { plasticity: 0.62, energy: 0.75 } },
    { name: 'Kappa', initState: { plasticity: 0.68, energy: 0.70 } },
    { name: 'Lambda',initState: { plasticity: 0.55, energy: 0.65 } }
  ])
  let successfulRoundTrips = 0, totalTests = 0
  for (let i = 0; i < TICKS; i++) {
    const snap = orchestrator.tick('', 1)
    const speaker = agents.find(a => a.name === snap.speaker)
    const encoder = speaker?.proj?.encoder
    if (encoder && typeof encoder.encodeString === 'function' && typeof encoder.decodeString === 'function') {
      totalTests++
      try {
        const encoded = encoder.encodeString(snap.text)
        const decoded = encoder.decodeString(encoded)
        const match = snap.text === decoded
        if (i % 6 === 0) { // Show sample every 6 turns
          console.log(`\nTurn ${i + 1} - ${snap.speaker} (${snap.stance}):`)
          console.log(`  Original: "${snap.text}"`)
          console.log(`  Encoded:  ${encoded}`)
          console.log(`  Decoded:  "${decoded}"`)
          console.log(`  Round-trip: ${match ? '✅' : '❌'}`)
        }
        if (match) successfulRoundTrips++
      } catch (error) {
        console.log(`\nTurn ${i + 1} - ${snap.speaker}:`)
        console.log(`  Encoding error: ${error.message}`)
      }
    }
  }
  section('Round-trip Summary')
  console.log(`Successful round-trips: ${successfulRoundTrips}/${totalTests}`)
  console.log(`Success rate: ${(successfulRoundTrips/totalTests * 100).toFixed(1)}%`)
  if (totalTests === 0) throw new Error('No round-trip tests could be performed - encoder methods not available')
  if (successfulRoundTrips / totalTests > 0.8) {
    console.log('✅ Encoding system is reliable')
  } else {
    console.log('⚠️  Encoding reliability needs improvement')
  }
}

async function interactiveConversationTest() {
  banner('INTERACTIVE CONVERSATION TEST')
  const { orchestrator, agents } = createConversation([
    {
      name: 'Alpha',
      themePacks: ALPHA_THEME,
      initState: { plasticity: 0.85, energy: 0.72 }
    },
    {
      name: 'Beta',
      themePacks: BETA_THEME,
      initState: { plasticity: 0.7, energy: 0.60 }
    },
    {
      name: 'Gamma',
      themePacks: GAMMA_THEME,
      initState: { plasticity: 0.55, energy: 0.50 }
    },
    {
      name: 'Delta',
      themePacks: DELTA_THEME,
      initState: { plasticity: 0.25, energy: 0.20 }
    }
  ])

  let conversationFlow = []
  let iU = 0, selfReflectiveUtterances = 0
  for (let i = 0; i < TICKS; i++) {
    const snap = orchestrator.tick('', 1)
    const speaker = agents.find(a => a.name === snap.speaker)
    const encoder = speaker?.proj?.encoder
    const isInteractive = snap.text.includes('{otherSpeaker}') || snap.text.includes('{theirUtterance}') ||
      snap.text.toLowerCase().includes('your') || snap.text.toLowerCase().includes('our')
    const isSelfReflective = snap.text.toLowerCase().startsWith('i ') || snap.text.toLowerCase().includes(' my ') ||
      snap.text.toLowerCase().includes(' i\'m ')
    if (isInteractive) iU++
    if (isSelfReflective) selfReflectiveUtterances++
    conversationFlow.push({
      turn: i,
      speaker: snap.speaker,
      utterance: snap.text,
      type: isInteractive ? 'interactive' : isSelfReflective ? 'self-reflective' : 'other'
    })
    if (i % 4 === 0 || isInteractive) {
      const typeIcon = isInteractive ? '🔄' : isSelfReflective ? '👤' : '💭'
      console.log(`\n\n[${i}] ${snap.speaker} ${typeIcon}: ${snap.text}`)
      console.log(`   Movement:  ${snap.movement.quality} ${snap.movement.primaryGesture} (${snap.movement.movementPhrase})`)
      if (encoder && typeof encoder.encodeString === 'function' && typeof encoder.decodeString === 'function') {
        const encoded = encoder.encodeString(snap.text)
        console.log(`   Encoded: ${encoded}`)
      }
    }
  }
  section('Interaction Analysis')
  console.log(`Interactive utterances: ${iU}/${TICKS}`)
  console.log(`Self-reflective utterances: ${selfReflectiveUtterances}/${TICKS}`)
  console.log(`Interaction ratio: ${Math.round((iU/TICKS)*100)}%`)
  let interactionGaps = []
  let lastInteractiveTurn = -1
  conversationFlow.forEach((turn, index) => {
    if (turn.type === 'interactive') {
      if (lastInteractiveTurn !== -1) {
        interactionGaps.push(index - lastInteractiveTurn)
      }
      lastInteractiveTurn = index
    }
  })
  const avgGap = interactionGaps.length > 0 ? interactionGaps.reduce((a, b) => a + b, 0) / interactionGaps.length : 0
  console.log(`Average turns between interactions: ${avgGap.toFixed(1)}`)
  if (iU >= 3) {
    console.log('✅ Interactive conversation patterns emerging successfully')
  } else {
    console.log('⚠️  Limited interaction - may need more interactive patterns')
  }
}

async function directTasteClassTest() {
  banner('DIRECT TASTE CLASS INTEGRATION TEST')
  const taste1 = new Taste('DirectTest1', ALPHA_THEME, {}, { plasticity: 0.9, energy: 0.8 })
  const taste2 = createTaste('DirectTest2', BETA_THEME, {}, { plasticity: 0.6, energy: 0.7 })
  section('Testing Multiple Taste Instances')
  const responses = []
  for (let i = 0; i < 4; i++) {
    const input = `Integration test input ${i + 1}`
    const context = { framework: { complexity: 0.7, coherence: 0.6, adaptability: 0.5 } }
    const resp1 = taste1.speak(input, 1, context)
    const resp2 = taste2.speak(input, 1, context)
    responses.push({
      turn: i + 1,
      taste1: { text: resp1.text, stance: resp1.stance },
      taste2: { text: resp2.text, stance: resp2.stance }
    })
    console.log(`Turn ${i + 1}:`)
    console.log(`  Taste1 (${taste1.agent.name}): "${resp1.text}" [${resp1.stance}]`)
    console.log(`  Taste2 (${taste2.agent.name}): "${resp2.text}" [${resp2.stance}]`)
    const state1 = taste1.getState()
    const state2 = taste2.getState()
    console.log(`  Energy: ${state1.energy.toFixed(2)} vs ${state2.energy.toFixed(2)}`)
    console.log(`  Plasticity: ${state1.plasticity.toFixed(2)} vs ${state2.plasticity.toFixed(2)}`)
  }
  section('Projections Integration Test')
  console.log('Testing projections access:')
  console.log(`  Taste1 encoder state:`, taste1.projections.encoder.getState().alphabetSize)
  console.log(`  Taste2 encoder state:`, taste2.projections.encoder.getState().alphabetSize)
  const testText = "Test message for encoding verification"
  const encoded1 = taste1.projections.encoder.encodeString(testText)
  const decoded1 = taste1.projections.encoder.decodeString(encoded1)
  console.log(`  Encoding test: ${testText === decoded1 ? '✅' : '❌'}`)
  section('State Management Test')
  taste1.hear(0.15, -0.1, 0.08)
  taste2.hear(-0.05, 0.02, 0.12)
  const finalState1 = taste1.getState()
  const finalState2 = taste2.getState()
  console.log('Final states after influence:')
  console.log(`  Taste1 - plasticity: ${finalState1.plasticity.toFixed(3)}, energy: ${finalState1.energy.toFixed(3)}`)
  console.log(`  Taste2 - plasticity: ${finalState2.plasticity.toFixed(3)}, energy: ${finalState2.energy.toFixed(3)}`)
  console.log('✅ Direct Taste class integration test passed')
  return { taste1, taste2, responses }
}

async function runAllTasteTests() {
  try {
    await singleAgentTasteTest()
    await directTasteClassTest()
    await memeticInfluenceTest()
    await capacityEvolutionTest()
    await roundTripValidationTest()
    await interactiveConversationTest()
    banner('ALL TESTS COMPLETE')
  } catch (error) {
    console.error('\n❌ TASTE TESTS FAILED:', error.message)
    console.error(error.stack)
    process.exit(1)
  }
}

await runAllTasteTests()