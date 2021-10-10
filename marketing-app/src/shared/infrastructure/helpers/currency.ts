export function getCurrencySymbol(currency: string) {
    const currencySymbols = {
        'USD': '$'
    } as Record<string, string>;

    const symbol = currencySymbols[currency];

    return symbol || currency;

}