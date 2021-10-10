import { UpdateUserAction } from "modules/account/types/Account";
import { MarketingAppAction, MarketingAppActionTypes } from "../reducers/marketingAppReducer";

export function getUpdateUserAction(dispatch: React.Dispatch<MarketingAppAction>): UpdateUserAction {
    const updateUserAction: UpdateUserAction = user => {

        if (user.email) {
            // do some actions

            dispatch({
                type: MarketingAppActionTypes.UpdateUser,
                data: user
            });
            return Promise.resolve(true);
        }

        return Promise.resolve(false);
    }

    return updateUserAction;
}
