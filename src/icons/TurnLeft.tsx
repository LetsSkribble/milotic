import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const TurnLeft: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M4.715 9h3.347C14.655 9 20 13.098 20 19.387" />
    <Path d="M9 14L4 9l5-5" />
  </Svg>
);

TurnLeft.defaultProps = defaultProps;
export default TurnLeft;
