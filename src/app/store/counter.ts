import { Action } from "@ngrx/store";



/*export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';*/

export enum CounterActionTypes {
    INCREMENT = '[Counter] Increment',
    DECREMENT = '[Counter] Decrement',
    RESET = '[Counter] Reset',
}

export class Increment implements Action {
    readonly type = CounterActionTypes.INCREMENT;
}
export class Decrement implements Action {
    readonly type = CounterActionTypes.DECREMENT;
}
export class Reset implements Action {
    readonly type = CounterActionTypes.RESET;
}
export type CounterActionsUnion = Increment | Decrement | Reset;

export function counterReducer(state = 0, action: CounterActionsUnion) {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return ++state;
        case CounterActionTypes.DECREMENT:
            return --state;
        case CounterActionTypes.RESET:
            return 0;
        default:
            return state
    }
}