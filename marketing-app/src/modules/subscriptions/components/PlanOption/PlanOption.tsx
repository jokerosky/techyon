import React from 'react';
import { SubscriptionPlanOption } from 'shared/marketing-app-core';

import { ReactComponent as Available } from './available.svg';
import { ReactComponent as NotAvailable } from './not-available.svg';

export interface PlanOptionProps {
    option: SubscriptionPlanOption
}

export const PlanOption: React.FC<PlanOptionProps> = props => {
    const { option } = props;
    return <li>
        {option.available ? <Available /> : <NotAvailable />}
        <p>{option.text}</p>
    </li>;
}