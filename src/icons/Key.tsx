import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Key: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M21 16v-4h-9" />
    <Circle cx={7} cy={12} r={4} />
    <Path d="M17 15v-3" />
  </Svg>
);

Key.defaultProps = defaultProps;
export default Key;
