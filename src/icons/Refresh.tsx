import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Refresh: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M22 12l-3 3-3-3" />
    <Path d="M11 20a8 8 0 1 1 8-8v2" />
  </Svg>
);

Refresh.defaultProps = defaultProps;
export default Refresh;
