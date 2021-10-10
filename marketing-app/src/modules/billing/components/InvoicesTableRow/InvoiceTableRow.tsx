import React from 'react';
import { getCurrencySymbol } from 'shared/infrastructure';
import { BillingRecord } from 'shared/marketing-app-core';

import { ReactComponent as PdfDoc } from './pdf-doc.svg'

export interface InvoiceTableRowProps {
    invoice: BillingRecord
}

export const InvoiceTableRow: React.FC<InvoiceTableRowProps> = props => {
    const { invoice } = props;

    // TODO: create a link and wrap with it
    const invoiceDocLink = <>
        <PdfDoc />
    </>

    return <tr>
        <td>{invoice.id}</td>
        <td>{invoice.date}</td>
        <td>{`${getCurrencySymbol(invoice.amount.currency)}${invoice.amount.amount}`}</td>
        <td>{invoiceDocLink}</td>
    </tr>;
}