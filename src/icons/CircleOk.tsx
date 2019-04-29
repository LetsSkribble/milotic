import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const CircleOk: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M7 13l3 3 7-7" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

CircleOk.defaultProps = defaultProps;
export default CircleOk;
