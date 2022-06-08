import styled from "styled-components";

export const GradientWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => `${theme.colors.background};`};

  * {
    font-family: ${({ theme }) => `${theme.fonts.primary};`};
    color: white;
  }

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ResponsiveRow = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 16px;

  @media only screen and (max-width: 1200px) {
    flex-flow: column;
  }
`;