import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Print: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M17 14v7H7v-7zM17 3v6H7V3z" />
    <Path d="M7 18H3V9h18v9h-4" />
  </Svg>
);

Print.defaultProps = defaultProps;
export default Print;
