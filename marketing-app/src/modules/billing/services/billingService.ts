import { Filter } from "shared/infrastructure";
import { BillingRecord } from "shared/marketing-app-core";
import { BillingService } from "shared/marketing-app-core/services";
import { MOCK_INVOICES } from "./mockData";


export class StandardBillingService implements BillingService {
    getInvoices(filter: Filter): Promise<BillingRecord[]> {
        return Promise.resolve(MOCK_INVOICES);
    }
}