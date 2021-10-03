import React, { Suspense, useMemo, useReducer } from 'react';


import { Layout } from 'shared/ui-kit/Layout/Layout';
import { AppNavbar } from './navigation/AppNavbar/AppNavbar';
import { AuthChecker } from '../../shared/infrastructure/AuthChecker';

import { marketingAppReducer, MARKETING_APP_INITIAL_STATE } from './reducers/marketingAppReducer';

import { MarketingAppRoutesTree } from './marketingAppRoutesTree';

import { getLoginAction, getLogoutAction } from './services/identity';
import { Navigate, Route, Routes, useNavigate } from 'react-router';


export const MarketingApp: React.FC = props => {

    const [state, dispatch] = useReducer(marketingAppReducer, MARKETING_APP_INITIAL_STATE);
    const navigate = useNavigate();

    // todo: move to services
    const loginFn = getLoginAction(dispatch, navigate);
    const logoutFn = getLogoutAction(dispatch, navigate);

    const navbar = <AppNavbar authorized={state.authorized} />;

    // TODO: move the loading and memoization functionality to external component
    const SignIn = useMemo(() => React.lazy(() => import('../../modules/identity/pages/SignIn/SignIn')), []);
    const CreateAccount = useMemo(() => React.lazy(() => import('../../modules/identity/pages/CreateAccount/CreateAccount')), []);
    const ForgotPassword = useMemo(() => React.lazy(() => import('../../modules/identity/pages/ForgotPassword/ForgotPassword')), []);
    const MyAccount = useMemo(() => React.lazy(() => import('../../modules/account/pages/MyAccount/MyAccount')), []);
    const SavedVideos = useMemo(() => React.lazy(() => import('../../modules/video/pages/SavedVideos/SavedVideos')), []);
    const VideoEditor = useMemo(() => React.lazy(() => import('../../modules/video/pages/VideoEditor/VideoEditor')), []);

    return (

        <Layout navbar={navbar}>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={MarketingAppRoutesTree.singIn} element={<SignIn login={loginFn} />} />
                    <Route path={MarketingAppRoutesTree.createAccount} element={<CreateAccount />} />
                    <Route path={MarketingAppRoutesTree.forgotPassword} element={<ForgotPassword />} />

                    <Route path={MarketingAppRoutesTree.createVideo}
                        element={
                            <AuthChecker
                                redirect={MarketingAppRoutesTree.singIn}
                                authorized={state.authorized} >
                                <VideoEditor videos={state.videos} />
                            </AuthChecker>} />

                    <Route path={MarketingAppRoutesTree.savedVideos}
                        element={
                            <AuthChecker
                                redirect={MarketingAppRoutesTree.singIn}
                                authorized={state.authorized}>
                                <SavedVideos videos={state.videos} />
                            </AuthChecker>} />

                    <Route path={MarketingAppRoutesTree.account.root}
                        element={
                            <AuthChecker
                                redirect={MarketingAppRoutesTree.singIn}
                                authorized={state.authorized}>
                                <MyAccount logout={logoutFn} />
                            </AuthChecker>}>
                        <Route path={MarketingAppRoutesTree.account.profile} element={<>Profile</>} />
                        <Route path={MarketingAppRoutesTree.account.myPlan} element={<>Plan</>} />
                        <Route path={MarketingAppRoutesTree.account.billing} element={<>Billing</>} />

                        <Route path="" element={<Navigate to={MarketingAppRoutesTree.account.profile} replace />} />
                        <Route path="*" element={<Navigate to={MarketingAppRoutesTree.account.profileUrl} replace />} />
                    </Route>

                    <Route path="" element={<Navigate to={MarketingAppRoutesTree.savedVideos} replace />} />

                </Routes>
            </Suspense>
        </Layout>
    )
}