import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ChangeFilterActionType, Filter, FilteringDirection } from 'shared/infrastructure';
import { BillingRecord } from 'shared/marketing-app-core';
import { InvoicesTableHeader } from 'modules/billing/components/InvoicesTableHeader/InvoicesTableHeader';
import { InvoiceTableRow } from 'modules/billing/components/InvoicesTableRow/InvoiceTableRow';

import { BillingService } from 'shared/marketing-app-core/services';
import { StandardBillingService } from 'modules/billing/services/billingService';

import './Billing.scss';


export interface BillingProps {
}

export const Billing: React.FC<BillingProps> = props => {
    const { } = props;

    const billingService: BillingService = useMemo(() => new StandardBillingService(), [])
    const [invoices, setInvoices] = useState<BillingRecord[]>([]);
    const [filter, setFilter] = useState<Filter>({
        field: 'Date',
        direction: FilteringDirection.desc
    });

    const getInvoices = useCallback(async (filter) => {
        try {
            const invoicesData = await billingService.getInvoices(filter);
            setInvoices(invoicesData);
        }
        catch {

        }
    }, [billingService]);


    useEffect(() => {
        getInvoices(filter);
    }, [filter, getInvoices]);


    const changeFilter = useCallback<ChangeFilterActionType>((filter) => {
        setFilter(filter);
    }, []);

    return <table className="billing-table">
        <InvoicesTableHeader changeFilter={changeFilter} filter={filter} />
        <tbody>
            {invoices.map(invoice => <InvoiceTableRow key={invoice.id} invoice={invoice} />)}
        </tbody>
    </table>;
}

export default Billing;