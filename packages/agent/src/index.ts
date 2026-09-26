import type {AgentPhase,ProjectState} from "@ai-workbench/shared";
export const AGENT_PHASES:AgentPhase[]=["DISCOVER","ANALYZE","PLAN","IMPLEMENT","VERIFY","REVIEW","DOCUMENT","REPORT"];
export function nextPhase(state:ProjectState):AgentPhase|null{const i=AGENT_PHASES.indexOf(state.currentPhase);return AGENT_PHASES[i+1]??null}