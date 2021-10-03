import { User, Video } from "shared/marketing-app-core/Entites";
import { LoginModel } from "shared/marketing-app-core/Login";


// TODO: think about splitting the state by reducers or introduce GraphQL schema and state manager like apollo
export interface MarketingAppState {
    authorized: boolean;
    user: User;
    videos: Video[];
}


export enum MarketingAppActionTypes {
    LogIn = 'LogIn',
    LogOut = 'LogOut'
}

export interface MarketingAppAction<T = any> {
    type: MarketingAppActionTypes;
    data: T;
}


export const MARKETING_APP_INITIAL_STATE: MarketingAppState = {
    authorized: false,
    user: {
        avatar: '',
        email: '',
        firstName: '',
        lastName: ''
    },
    videos: []
};

type ActionFunction<T = any> = (data: T) => MarketingAppState;

export type MarketingAppReducerType = (state: MarketingAppState, action: MarketingAppAction) => MarketingAppState;

export const marketingAppReducer: MarketingAppReducerType = (state, action) => {
    const loginAction: ActionFunction<LoginModel> = (data) => {
        return { ...state, authorized: true, user: { ...state.user, email: data.email } };
    }
    const logOutAction: ActionFunction = () => {
        return { ...state, authorized: false };
    }

    // do not like switches since it is violates sOlid principle, although for js it is not significant 
    const actionsMap = {
        [MarketingAppActionTypes.LogIn]: loginAction,
        [MarketingAppActionTypes.LogOut]: logOutAction
    } as Record<MarketingAppActionTypes, (data: any) => MarketingAppState>

    const actionFn = actionsMap[action.type];
    return actionFn ? actionFn(action.data) : state;
}