import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const BatteryFull: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M21 14v-4M20 6H4v12h16zM12 14v-4m4 4v-4m-8 4v-4" />
  </Svg>
);

BatteryFull.defaultProps = defaultProps;
export default BatteryFull;
