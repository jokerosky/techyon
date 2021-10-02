
export interface MarketingAppState {
    authorized: boolean;
}


export enum MarketingAppActionTypes {
    Authorization = 'Authorization'
}

export interface MarketingAppAction<T = any> {
    type: MarketingAppActionTypes;
    data: T;
}


export const MARKETING_APP_INITIAL_STATE: MarketingAppState = {
    authorized: false
};

type ActionFunction<T = any> = (data: T) => MarketingAppState;

export type MarketingAppReducerType = (state: MarketingAppState, action: MarketingAppAction) => MarketingAppState;

export const marketingAppReducer: MarketingAppReducerType = (state, action) => {
    const authorizationAction: ActionFunction<boolean> = (data) => {
        return { ...state, authorized: data };
    }

    // do not like switches since it is violates sOlid principle, although for js it is not significant 
    const actionsMap = {
        [MarketingAppActionTypes.Authorization]: authorizationAction
    } as Record<MarketingAppActionTypes, (data: any) => MarketingAppState>

    const actionFn = actionsMap[action.type];
    return actionFn ? actionFn(action.data) : state;
}