import { Projections } from 'projections'
import { noveltyVersus, editDistance, supportFrom, stanceValenceOf, overloadPenalty, brevityScore,
  mismatchPenalty, computeMemeticInfluence, extractGesturesFromMovement, extractVerbsFromText,
  extractPatternsFromText, extractWordsByCategory } from './utils.mjs'
import { Agent, Orchestrator } from './agent.mjs'

function createConversation(agentsSpec = [], ProjectionsCtor = Projections) {
  const defaults = [
    { name: 'Alpha', themePacks: {}, motifConfig: {}, initState: { plasticity: 0.55, energy: 0.7 } },
    { name: 'Beta',  themePacks: {}, motifConfig: {}, initState: { plasticity: 0.65, energy: 0.6 } },
    { name: 'Gamma', themePacks: {}, motifConfig: {}, initState: { plasticity: 0.45, energy: 0.8 } },
    { name: 'Delta', themePacks: {}, motifConfig: {}, initState: { plasticity: 0.25, energy: 0.4 } }
  ]
  const spec = agentsSpec.length ? agentsSpec : defaults
  const agents = spec.map(s => new Agent(s.name, s.themePacks, s.motifConfig, s.initState, ProjectionsCtor))
  const names = agents.map(a => a.name)
  const W = Object.fromEntries(names.map(i => [i, Object.fromEntries(names.map(j => [j, i === j ? 0 : 0.7]))]))
  const orchestrator = new Orchestrator(agents, W, { temperature: 0.7, boredom: 0.25 })
  return { orchestrator, agents }
}

export class Taste {
  constructor(name, themePacks = {}, motifConfig = {}, initState = {}, ProjectionsCtor = Projections) {
    this.agent = new Agent(name, themePacks, motifConfig, initState, ProjectionsCtor)
  }

  speak(input = '', dt = 1, ctx = {}) { return this.agent.speak(input, dt, ctx) }

  hear(dP, dE, dQ, inertia = 0.35) { return this.agent.hear(dP, dE, dQ, inertia) }

  idle(dt = 1) { return this.agent.idle(dt) }

  getState() {
    return {
      stance: this.agent.stance,
      energy: this.agent.state.energy,
      plasticity: this.agent.state.plasticity,
      quality: this.agent.state.quality,
      framework: { ...this.agent.state.framework },
      lastUtterance: this.agent.lastUtterance,
      telemetry: { ...this.agent.telemetry }
    }
  }

  get projections() {
    return this.agent.proj
  }
}

export function createTaste(name, themePacks = {}, motifConfig = {}, initState = {}) { return new Taste(name, themePacks, motifConfig, initState) }

export {
  Agent,
  Orchestrator,
  createConversation,
  computeMemeticInfluence,
  extractGesturesFromMovement,
  extractVerbsFromText,
  extractPatternsFromText,
  extractWordsByCategory,
  noveltyVersus,
  editDistance,
  overloadPenalty,
  stanceValenceOf,
  supportFrom,
  mismatchPenalty,
  brevityScore
}

export default Taste