import React from 'react';
import { getCurrencySymbol } from 'shared/infrastructure';
import { Money } from 'shared/marketing-app-core';

import './PlanPrice.scss';

export interface PlanPriceProps {
    price: Money;
    active?: boolean;
}

export const PlanPrice: React.FC<PlanPriceProps> = props => {
    const { price, active } = props;

    // TODO: implement currency formatter
    return <div className={`price ${active && 'active'}`}>
        <span className="currency-symbol">{getCurrencySymbol(price.currency)}</span>{price.amount}
    </div>;
}