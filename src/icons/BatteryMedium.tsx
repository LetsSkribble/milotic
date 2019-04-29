import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const BatteryMedium: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M21 14v-4M20 6H4v12h16zM12 14v-4m-4 4v-4" />
  </Svg>
);

BatteryMedium.defaultProps = defaultProps;
export default BatteryMedium;
