import React, { Suspense, useMemo, useReducer } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router';


import { Layout } from 'shared/ui-kit/Layout/Layout';
import { AppNavbar } from './navigation/AppNavbar/AppNavbar';
import { AuthChecker } from '../../shared/infrastructure/components/AuthChecker';

import { marketingAppReducer, MARKETING_APP_INITIAL_STATE } from './reducers/marketingAppReducer';



import { getLoginAction, getLogoutAction } from './services/identity';
import { getUpdateUserAction } from './services/account';
import { MarketingAppRoutesTree } from 'shared/marketing-app-core';


export const MarketingApp: React.FC = props => {

    const [state, dispatch] = useReducer(marketingAppReducer, MARKETING_APP_INITIAL_STATE);
    const navigate = useNavigate();

    // todo: move to services
    const loginFn = getLoginAction(dispatch, navigate);
    const logoutFn = getLogoutAction(dispatch, navigate);
    const updateUser = getUpdateUserAction(dispatch);


    const navbar = <AppNavbar authorized={state.authorized} />;

    // TODO: move the loading and memoization functionality to external component
    // and probably move routes to corresponding modules
    const SignIn = useMemo(() => React.lazy(() => import('../../modules/identity/pages/SignIn/SignIn')), []);
    const CreateAccount = useMemo(() => React.lazy(() => import('../../modules/identity/pages/CreateAccount/CreateAccount')), []);
    const ForgotPassword = useMemo(() => React.lazy(() => import('../../modules/identity/pages/ForgotPassword/ForgotPassword')), []);
    const MyAccount = useMemo(() => React.lazy(() => import('../../modules/account/pages/MyAccount/MyAccount')), []);
    const SavedVideos = useMemo(() => React.lazy(() => import('../../modules/video/pages/SavedVideos/SavedVideos')), []);
    const VideoEditor = useMemo(() => React.lazy(() => import('../../modules/video/pages/VideoEditor/VideoEditor')), []);
    const Profile = useMemo(() => React.lazy(() => import('../../modules/account/pages/Profile/Profile')), []);
    const MyPlan = useMemo(() => React.lazy(() => import('../../modules/subscriptions/pages/MyPlan/MyPlan')), []);
    const Billing = useMemo(() => React.lazy(() => import('../../modules/billing/pages/Billing/Billing')), []);



    return (

        <Layout navbar={navbar}>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={MarketingAppRoutesTree.singIn} element={state.authorized
                        ? <Navigate to={MarketingAppRoutesTree.savedVideos} replace />
                        : <SignIn login={loginFn} />} />

                    <Route path={MarketingAppRoutesTree.createAccount} element={<CreateAccount />} />
                    <Route path={MarketingAppRoutesTree.forgotPassword} element={<ForgotPassword />} />

                    <Route path={MarketingAppRoutesTree.editVideo}
                        element={
                            <AuthChecker
                                redirect={MarketingAppRoutesTree.singIn}
                                authorized={state.authorized} >
                                <VideoEditor />
                            </AuthChecker>} />

                    <Route path={MarketingAppRoutesTree.savedVideos}
                        element={
                            <AuthChecker
                                redirect={MarketingAppRoutesTree.singIn}
                                authorized={state.authorized}>
                                <SavedVideos />
                            </AuthChecker>} />


                    <Route path={MarketingAppRoutesTree.account.root}
                        element={
                            <AuthChecker
                                redirect={MarketingAppRoutesTree.singIn}
                                authorized={state.authorized}>
                                <MyAccount logout={logoutFn} />
                            </AuthChecker>}>
                        <Route path={MarketingAppRoutesTree.account.profile} element={<Profile updateUser={updateUser} user={state.user} />} />
                        <Route path={MarketingAppRoutesTree.account.myPlan} element={<MyPlan activePlanId={state.plan.activePlanId} plans={state.plan.plans} />} />
                        <Route path={MarketingAppRoutesTree.account.billing} element={<Billing />} />

                        <Route path="" element={<Navigate to={MarketingAppRoutesTree.account.profile} replace />} />
                        <Route path="*" element={<Navigate to={MarketingAppRoutesTree.account.profileUrl} replace />} />
                    </Route>

                    <Route path="" element={<Navigate to={MarketingAppRoutesTree.savedVideos} replace />} />

                </Routes>
            </Suspense>
        </Layout>
    )
}