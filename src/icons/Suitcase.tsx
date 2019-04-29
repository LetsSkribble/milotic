import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Suitcase: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 7h18v12H3zM8 3h8v4H8z" />
  </Svg>
);

Suitcase.defaultProps = defaultProps;
export default Suitcase;
