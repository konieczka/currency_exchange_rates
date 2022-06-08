import styled, { css } from "styled-components";

interface BoxProps {
  customCss?: string;
}

export const LightGradialBox = styled("div")<BoxProps>`
  border-radius: 30px;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.colors.gradientPrimaryTop} 0%, ${theme.colors.gradientPrimaryBottom} 100%);`};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: fit-content;

  ${({ customCss }) =>
    customCss &&
    css`
      ${customCss};
    `}
`;
