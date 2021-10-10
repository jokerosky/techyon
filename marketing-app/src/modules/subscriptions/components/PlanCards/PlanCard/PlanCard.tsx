import React, { useCallback } from 'react';
import { SubscriptionPlan } from 'shared/marketing-app-core';
import { Button } from 'shared/ui-kit';
import { PlanOption } from '../../PlanOption/PlanOption';
import { PlanPrice } from '../../PlanPrice/PlanPrice';

import './PlanCard.scss';

export interface PlanCardProps {
    plan: SubscriptionPlan;
    buttonTitle: string;

    onSelect: (planId: string) => void;
}

export const PlanCard: React.FC<PlanCardProps> = props => {
    const { plan, buttonTitle, onSelect } = props;

    const onClick = useCallback(() => {

        onSelect(plan.id);
    }, [plan, onSelect]);

    return <div className="plan-card">
        <h4>{plan.name}</h4>
        <ul>
            {plan.options.map(option => <PlanOption key={Math.random()} option={option} />)}
        </ul>
        <PlanPrice price={plan.price} />
        <Button onClick={onClick} color="secondary" size="big" >{buttonTitle}</Button>
    </div>;
}