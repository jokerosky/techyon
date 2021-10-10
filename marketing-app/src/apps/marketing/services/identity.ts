import React from "react";
import { NavigateFunction } from "react-router";
import { MarketingAppRoutesTree } from "shared/marketing-app-core";
import { LoginAction, LogoutAction } from "shared/marketing-app-core/Login";

import { MarketingAppAction, MarketingAppActionTypes } from "../reducers/marketingAppReducer";



// TODO: maybe convert to domain service and move to 'identity' module
export function getLoginAction(dispatch: React.Dispatch<MarketingAppAction>, navigate: NavigateFunction): LoginAction {
    const loginAction: LoginAction = data => {

        if (data.email && data.password) {
            // do some actions

            dispatch({
                type: MarketingAppActionTypes.LogIn,
                data
            });

            navigate(MarketingAppRoutesTree.savedVideos);

            return Promise.resolve(true);
        }

        return Promise.resolve(false);
    }

    return loginAction;
}

export function getLogoutAction(dispatch: React.Dispatch<MarketingAppAction>, navigate: NavigateFunction): LogoutAction {
    const loginAction: LogoutAction = () => {
        // do some actions

        dispatch({
            type: MarketingAppActionTypes.LogOut,
            data: null
        });

        navigate(MarketingAppRoutesTree.singIn);

        return Promise.resolve(true);

    }

    return loginAction;
}