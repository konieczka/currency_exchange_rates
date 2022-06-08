import styled, { css } from "styled-components";

export const Container = styled("div")<{
  disableDropdown?: boolean;
  isDropdownOpen: boolean;
}>`
  width: 80%;
  max-height: 65%;

  background: rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  color: white;
  font-size: 48px;
  position: relative;

  display: flex;
  justify-content: flex-start;
  gap: 16px;
  align-items: center;
  padding: 1.5rem;


  #dropdown_arrow {
    cursor: pointer;
  }

  ${({ disableDropdown }) =>
    disableDropdown &&
    css`
      justify-content: flex-start;
      padding-left: 48px;

      svg {
        margin-right: 32px;
      }
    `}

  ${({ isDropdownOpen }) =>
    isDropdownOpen &&
    css`
      #dropdown_arrow {
        transform: rotate(180deg);
      }
    `}

    @media only screen and (max-width: 1200px) {
      font-size: 28px;
      padding: 1rem;
      svg {
        width: 2.5rem;
      }
    }
  
    @media only screen and (max-width: 600px) {
      font-size: 18px;
      padding: 0.5rem;
      svg {
        width: 2rem;
      }
    }
  
`;

export const DropdownBody = styled.div`
  background: rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  border-radius: 15px;
  position: absolute;
  bottom: -256px;
  left: 0;
  width: calc(100% - 64px);
  height: 256px;
  z-index: 101;
  padding: 16px 32px;
  user-select: none;
`;

export const DropdownOptions = styled.div`
  display: flex;
  flex-flow: column nowrap;
  overflow-y: scroll;
  overflox-x: hidden;
  height: 100%;
`;

export const DropdownOption = styled.div`
  width: 90%;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
