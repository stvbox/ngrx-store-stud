import { ActionReducer, Action, createSelector, ActionReducerMap } from '@ngrx/store';
import { AppState } from '.';
import { SelectorWithProps } from '@ngrx/store/src/models';
import { stat } from 'fs';

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

const initRed1 = { items: ['s11', 's12', 's13'] };
const initRed2 = { items: ['s21', 's22', 's23'] };

const red1: ActionReducer<ThingState, feaActionsType> = function (state: ThingState = initRed1, action: feaActionsType): ThingState {
    switch (action.type) {
        case feaActions.ACT1:
        case feaActions.ACT2:
            state.items.push('red1');
            return {
                ...state,
                items: [
                    ...state.items,
                    'red1'
                ]
            };
        default:
            return state;
    }
};
const red2: ActionReducer<ThingState, feaActionsType> = function (state: ThingState = initRed2, action: feaActionsType): ThingState {
    switch (action.type) {
        case feaActions.ACT1:
        case feaActions.ACT2:
            return {
                ...state,
                items: [
                    ...state.items,
                    'red2'
                ]
            };

        default:
            return state;
    }
};

export type feaActionsType = Act1 | Act2;

export const featureReducers: ActionReducerMap<any> = {
    red1, red2
};

export interface ThingState {
    items: string[];
}

const selectFeature: SelectorWithProps<any, any, any> = (state: AppState) => {
    console.log('Указатель');
    console.log(state.feature); // этот член нужно было описывать в AppState?
    console.log('{ .. ---------');

    return { ...state.feature };
};

/*const selectFeature = (state: AppState): ThingState => {
    console.log(state);
};*/
export const selectFeatureCounter = createSelector(selectFeature, (state: ThingState) => {

    // state. - Какой здесь должен быть использован интерфейс? Его нужно описывать?

    console.log(JSON.stringify(state.red1));
    console.log(JSON.stringify(state.red2));

    return [
        ...state.red1.items,
        ...state.red2.items
    ]

});

