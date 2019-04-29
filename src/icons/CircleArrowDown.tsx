import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const CircleArrowDown: Icon = ({ size, ...props }: IconProps) => (
  <Svg
    fill="none"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M15 13.5l-3 3-3-3M12 15V7.5M12 16.5V15v1.5z" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

CircleArrowDown.defaultProps = defaultProps;
export default CircleArrowDown;
