export const getCurrencyIcon = (code: string) => {
    switch (code) {
        case 'USD':
            return 'πΊπΈ';
        case 'EUR':
            return 'πͺπΊ';
        case 'PLN':
            return 'π΅π±';
        case 'AUD':
            return 'π¦πΊ';
        case 'CAD':
            return 'π¨π¦';
        case 'HUF':
            return 'π­πΊ';
        case 'CHF':
            return 'π¨π­';
        case 'GBP':
            return 'π¬π§';
        case 'JPY':
            return 'π―π΅';
        case 'CZK':
            return 'π¨πΏ';
        case 'DKK':
            return 'π©π°';
        case 'NOK':
            return 'π³π΄';
        case 'SEK':
            return 'πΈπͺ';
        default:
            return '';
    }
}