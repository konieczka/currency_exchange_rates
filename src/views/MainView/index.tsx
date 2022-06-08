import CurrencyDropdown from "components/CurrencyDropdown";
import GenericContainer from "components/GenericContainer";
import { ResponsiveRow } from "components/GenericContainer/styles";
import InputOutput from "components/InputOutput";
import Logo from "components/Logo";
import { useEffect, useState } from "react";
import { getCurrenciesDict } from "utils/getCurrenciesDict";

const MainView = () => {
  const [exchangeRates, setExchangeRates] = useState<null | any>(null);
  const [currencies, setCurrencies] = useState<null | any>(null);

  const [outputCurrency, setOutputCurrency] = useState<null | any>(null);
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      const exchangeRatesRaw = await fetch(
        "http://api.nbp.pl/api/exchangerates/tables/C/"
      )
        .then((response) => response.json())
        .then((data) => data[0]);

      setExchangeRates(exchangeRatesRaw);
    };

    fetchExchangeRates();
  }, []);

  useEffect(() => {
    if (exchangeRates && exchangeRates.rates) {
      setCurrencies(getCurrenciesDict(exchangeRates.rates));
    }
  }, [exchangeRates]);

  useEffect(() => {
    if (currencies) {
      setOutputCurrency(currencies.EUR);
    }
  }, [currencies]);

  return (
    <GenericContainer>
      <Logo />
      {outputCurrency && (
        <>
          <ResponsiveRow>
            <CurrencyDropdown
              currency="PLN"
              exchangeRate={Math.round((1 / outputCurrency.ask) * 1000) / 1000}
              customCss={`width: 500px;             
              @media only screen and (max-width: 600px) {
                width: 250px;`}
              disableDropdown
            />
            <CurrencyDropdown
              currency={outputCurrency.code}
              onCurrencyChange={(newCurrency) =>
                setOutputCurrency(currencies[newCurrency])
              }
              exchangeRate={outputCurrency.ask}
              customCss={`width: 500px;             
              @media only screen and (max-width: 600px) {
                width: 250px;`}
              availableCurrencies={exchangeRates.rates}
            />
          </ResponsiveRow>
          <InputOutput
            inputValue={inputValue}
            onValueChange={(v) => setInputValue(v)}
            outputCurrency={outputCurrency}
            customCss={`width: 1080px; display: flex; flex-flow: row nowrap; justify-content: space-between;
              
              @media only screen and (max-width: 1200px) {
                width: 500px;}

                @media only screen and (max-width: 600px) {
                  width: 250px;}
              `}
          />
        </>
      )}
    </GenericContainer>
  );
};

export default MainView;
