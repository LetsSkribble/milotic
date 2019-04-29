import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Placeholder: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 3h18v18H3zM21 21L3 3l18 18zm0-18L3 21 21 3z" />
  </Svg>
);

Placeholder.defaultProps = defaultProps;
export default Placeholder;
