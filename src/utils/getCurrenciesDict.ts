export const getCurrenciesDict = (currenciesList: any[]) => {
    return currenciesList.reduce((result, item) => {
        let currencyCode = item.code;
        result[currencyCode] = item;

        return result;
    }, {})
}