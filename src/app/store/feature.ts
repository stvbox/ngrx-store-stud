import { createSelector, ActionReducerMap, ActionReducer, Action } from "@ngrx/store";
import { AppState } from ".";

export enum feaActions {
    ACT1 = 'FEATURE ACTION1',
    ACT2 = 'FEATURE ACTION2'
}

class Act1 implements Action {
    type: feaActions.ACT1;
}
class Act2 implements Action {
    type: feaActions.ACT2;
}

const initRed1 = { item: ['s11', 's12', 's13'] };
const initRed2 = { item: ['s21', 's22', 's23'] };

const red1: ActionReducer<FeatureState, feaActionsType> = function (state: FeatureState, action: feaActionsType): FeatureState {
    switch (action.type) {
        case feaActions.ACT1:
        case feaActions.ACT2:
            state.items.push('red1');
        default:
            return state;
    }
};
const red2: ActionReducer<FeatureState, feaActionsType> = function (state: FeatureState, action: feaActionsType): FeatureState {
    switch (action.type) {
        case feaActions.ACT1:
        case feaActions.ACT2:
            state.items.push('red2');
        default:
            return state;
    }
};

export type feaActionsType = Act1 | Act2;

export const featureReducers: ActionReducerMap<any> = {
    red1, red2
};

export interface FeatureState {
    items: string[];
}

const selectFeature = (state: AppState) => state.feature;
const selectFeatureCounter = createSelector(selectFeature, (state: FeatureState) => state.counter);