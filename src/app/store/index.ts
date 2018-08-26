import { FeatureState } from "./feature";
import { ZeroTenState } from "./zero-tens";
import { ActionReducer, MetaReducer, ActionReducerMap } from "@ngrx/store";

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {

        //console.log(state);
        console.log(action);

        return reducer(state, action);
    }
}

export const metaReducers: MetaReducer<any>[] = [debug];

export class AppState {
    cnt: number;
    feature: FeatureState;
    zt: ZeroTenState;
    featureReducers: ActionReducerMap<any>;
}
