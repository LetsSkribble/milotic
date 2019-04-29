import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const CircleArrowUp: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M9 10.5l3-3 3 3M12 16.5V9M12 7.5V9" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

CircleArrowUp.defaultProps = defaultProps;
export default CircleArrowUp;
