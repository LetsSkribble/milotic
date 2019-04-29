import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const CircleArrowRight: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M13.5 9l3 3-3 3M7.5 12H15M16.5 12H15" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

CircleArrowRight.defaultProps = defaultProps;
export default CircleArrowRight;
