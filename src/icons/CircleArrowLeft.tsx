import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const CircleArrowLeft: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M10.5 15l-3-3 3-3M16.5 12H9M7.5 12H9" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

CircleArrowLeft.defaultProps = defaultProps;
export default CircleArrowLeft;
