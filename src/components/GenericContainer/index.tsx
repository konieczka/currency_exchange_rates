import React from "react";
import { GradientWrapper } from "./styles";

interface Props {
  children: React.ReactNode;
}

const GenericContainer: React.FC<Props> = ({ children }) => {
  return <GradientWrapper>{children}</GradientWrapper>;
};

export default GenericContainer;
