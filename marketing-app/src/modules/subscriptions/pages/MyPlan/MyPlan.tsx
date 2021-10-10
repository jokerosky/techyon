import React, { useCallback } from 'react';

import { SubscriptionPlan } from 'shared/marketing-app-core';
import { ActivePlanCard, PlanCard } from 'modules/subscriptions/components/PlanCards';

import './MyPlan.scss';

export interface MyPlanProps {
    activePlanId: string;
    plans: SubscriptionPlan[];
}

export const MyPlan: React.FC<MyPlanProps> = props => {
    const { activePlanId, plans } = props;

    const selectPlan = useCallback((planId) => {
        alert(`Selected plan [${planId}]`);
    }, []);

    // we cфn throw an excepton or show available plans instead
    const noPlanSelected = { price: { amount: -1 } };

    const activePlan = plans.find(plan => plan.id === activePlanId) || noPlanSelected;


    return <div className="my-plan">
        {plans.map(plan =>
            plan.id === activePlanId
                ? <ActivePlanCard key={Math.random()} plan={plan} />
                : <PlanCard key={Math.random()} plan={plan}
                    onSelect={selectPlan}
                    buttonTitle={activePlan?.price?.amount > plan.price.amount
                        ? 'Downgrade'
                        : 'Upgrade'} />)}
    </div>
}

export default MyPlan;