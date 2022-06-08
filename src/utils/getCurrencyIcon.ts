export const getCurrencyIcon = (code: string) => {
    switch (code) {
        case 'USD':
            return '🇺🇸';
        case 'EUR':
            return '🇪🇺';
        case 'PLN':
            return '🇵🇱';
        case 'AUD':
            return '🇦🇺';
        case 'CAD':
            return '🇨🇦';
        case 'HUF':
            return '🇭🇺';
        case 'CHF':
            return '🇨🇭';
        case 'GBP':
            return '🇬🇧';
        case 'JPY':
            return '🇯🇵';
        case 'CZK':
            return '🇨🇿';
        case 'DKK':
            return '🇩🇰';
        case 'NOK':
            return '🇳🇴';
        case 'SEK':
            return '🇸🇪';
        default:
            return '';
    }
}