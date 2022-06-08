import { LightGradialBox } from "components/Box";
import { AmountInput, AmountOutput } from "./styles";

interface Props {
  customCss: string;
  inputValue: number;
  onValueChange: (v: number) => void;
  outputCurrency: any;
}

const InputOutput: React.FC<Props> = ({
  customCss,
  inputValue,
  onValueChange,
  outputCurrency,
}) => {
  return (
    <LightGradialBox customCss={customCss}>
      <AmountInput
        value={inputValue}
        type="number"
        onChange={(e) => {
          onValueChange(parseInt(e.target.value));
        }}
      />
      <AmountOutput>
        {inputValue
          ? `= ${Math.round(inputValue / outputCurrency.ask * 100) / 100} ${
              outputCurrency.code
            }`
          : "Provide a number"}
      </AmountOutput>
    </LightGradialBox>
  );
};

export default InputOutput;
