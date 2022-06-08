import styled from "styled-components";

export const AmountInput = styled.input`
  background: linear-gradient(180deg, #4e4e4e 0%, #3d3d3d 100%);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75);
  border-radius: 15px;
  padding: 16px;
  width: 492px;

  outline: none;
  border: none;
  font-size: 32px;

  @media only screen and (max-width: 1200px) {
    font-size: 24px;
    width: 282px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    width: 84px;
  }

  &:focus {
    background: rgba(255, 255, 255, 1%);
  }
`;

export const AmountOutput = styled.span`
  padding: 16px;
  font-size: 48px;

  @media only screen and (max-width: 1200px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }

`;
