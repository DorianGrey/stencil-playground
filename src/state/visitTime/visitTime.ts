import { Action } from "@stencil/redux";

// State type and access definition
export type State = number;
export interface VisitTimerStateSlice {
  visitTime: State;
}
export const getVisitTime = (state: VisitTimerStateSlice) => state.visitTime;

// Action definitions
export enum IncrementVisitTimeKeys {
  INC_SECONDS = "INC_SECONDS"
}
export interface IncrementVisitTimeAction {
  type: IncrementVisitTimeKeys.INC_SECONDS;
}
export type VisitTimeActionTypes = IncrementVisitTimeAction;

export const incrementVisitTime: Action = () => (
  dispatch: (a: VisitTimeActionTypes) => void
) => {
  return dispatch({ type: IncrementVisitTimeKeys.INC_SECONDS });
};

// Initial state and reducer.
const initialVisitTime = 0;
export function visitTimeReducer(
  state: number = initialVisitTime,
  action: VisitTimeActionTypes
): State {
  switch (action.type) {
    case IncrementVisitTimeKeys.INC_SECONDS:
      return state + 1;
    default:
      return state;
  }
}
