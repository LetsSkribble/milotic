import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const BatteryAlt: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M14 3h-4M6 4v17h12V4z" />
  </Svg>
);

BatteryAlt.defaultProps = defaultProps;
export default BatteryAlt;
