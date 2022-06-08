import React, { useState } from "react";
import { LightGradialBox } from "components/Box";
import { ReactComponent as DropdownArrow } from "assets/dropdown_arrow_down.svg";
import { getCurrencyIcon } from "utils/getCurrencyIcon";
import {
  Container,
  DropdownBody,
  DropdownOptions,
  DropdownOption,
} from "./styles";

interface Props {
  currency: string;
  onCurrencyChange?: (v: string) => void;
  exchangeRate: number;
  customCss?: string;
  disableDropdown?: boolean;
  availableCurrencies?: any[];
}

const CurrencyDropdown: React.FC<Props> = ({
  currency,
  onCurrencyChange,
  exchangeRate,
  customCss,
  disableDropdown = false,
  availableCurrencies,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <LightGradialBox customCss={customCss}>
      <Container
        disableDropdown={disableDropdown}
        isDropdownOpen={isDropdownOpen}
      >
        {getCurrencyIcon(currency)} {currency} {exchangeRate}
        {!disableDropdown && (
          <DropdownArrow
            id="dropdown_arrow"
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          />
        )}
        {availableCurrencies && isDropdownOpen && onCurrencyChange && (
          <DropdownBody>
            <DropdownOptions>
              {availableCurrencies.map((currency) => (
                <DropdownOption
                  onClick={() => {
                    onCurrencyChange(currency.code);
                    setIsDropdownOpen((prev) => !prev);
                  }}
                >
                  {getCurrencyIcon(currency.code)} {currency.code}
                </DropdownOption>
              ))}
            </DropdownOptions>
          </DropdownBody>
        )}
      </Container>
    </LightGradialBox>
  );
};

export default CurrencyDropdown;
