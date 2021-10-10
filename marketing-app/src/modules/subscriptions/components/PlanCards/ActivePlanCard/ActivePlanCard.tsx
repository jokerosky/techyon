import React from 'react';
import { SubscriptionPlan } from 'shared/marketing-app-core';

import { PlanOption } from 'modules/subscriptions/components/PlanOption/PlanOption';

import './ActivePlanCard.scss'
import { PlanPrice } from '../../PlanPrice/PlanPrice';

export interface ActivePlanCardProps {
    plan: SubscriptionPlan;
}

export const ActivePlanCard: React.FC<ActivePlanCardProps> = props => {
    const { plan } = props;
    return <div className="plan-card active">
        <h4>{plan.name}</h4>
        <ul>
            {plan.options.map(option => <PlanOption key={Math.random()} option={option} />)}
        </ul>
        <PlanPrice active price={plan.price} />
        <p className="current-plan-label">Current Plan</p>
    </div>;
}