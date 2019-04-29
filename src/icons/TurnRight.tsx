import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const TurnRight: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3.715 19.387C3.715 13.098 9.06 9 15.653 9H19" />
    <Path d="M15 4l5 5-5 5" />
  </Svg>
);

TurnRight.defaultProps = defaultProps;
export default TurnRight;
