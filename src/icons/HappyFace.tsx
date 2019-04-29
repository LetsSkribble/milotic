import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const HappyFace: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M7.301 14.001C8.073 15.758 9.988 17 12 17c2.002 0 3.913-1.245 4.693-2.994M15 9" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

HappyFace.defaultProps = defaultProps;
export default HappyFace;
