import { DEFAULT_PLANS } from "modules/subscriptions/mockData";
import { SubscriptionPlan, User, Video } from "shared/marketing-app-core/Entites";
import { LoginModel } from "shared/marketing-app-core/Login";


// TODO: think about splitting the state by reducers or introduce GraphQL schema and state manager like apollo
export interface MarketingAppState {
    authorized: boolean;
    user: User;
    plan: {
        activePlanId: string;
        plans: SubscriptionPlan[];
    }
}


export enum MarketingAppActionTypes {
    LogIn = 'LogIn',
    LogOut = 'LogOut',

    UpdateUser = 'UpdateUser',
}

export interface MarketingAppAction<T = any> {
    type: MarketingAppActionTypes;
    data: T;
}


export const MARKETING_APP_INITIAL_STATE: MarketingAppState = {
    authorized: false,
    user: {
        avatar: '',
        email: 'test@use.er',
        firstName: 'Test',
        lastName: 'User'
    },
    plan: {
        activePlanId: 'team',
        plans: DEFAULT_PLANS
    },
};

type ActionFunction<T = any> = (data: T) => MarketingAppState;

export type MarketingAppReducerType = (state: MarketingAppState, action: MarketingAppAction) => MarketingAppState;

// TODO: split to redux like reducers
export const marketingAppReducer: MarketingAppReducerType = (state, action) => {
    const loginAction: ActionFunction<LoginModel> = (data) => {
        return { ...state, authorized: true, user: { ...state.user, email: data.email } };
    }
    const logOutAction: ActionFunction = () => {
        return { ...state, authorized: false };
    }
    const updateUserAction: ActionFunction = (data) => {
        return { ...state, user: data };

    }

    // do not like switches since it is violates sOlid principle, although for js it is not significant 
    const actionsMap = {
        [MarketingAppActionTypes.LogIn]: loginAction,
        [MarketingAppActionTypes.LogOut]: logOutAction,
        [MarketingAppActionTypes.UpdateUser]: updateUserAction

    } as Record<MarketingAppActionTypes, (data: any) => MarketingAppState>

    const actionFn = actionsMap[action.type];
    return actionFn ? actionFn(action.data) : state;
}