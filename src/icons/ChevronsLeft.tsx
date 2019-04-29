import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ChevronsLeft: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M11 17l-5-5 5-5M17 17l-5-5 5-5" />
  </Svg>
);

ChevronsLeft.defaultProps = defaultProps;
export default ChevronsLeft;
