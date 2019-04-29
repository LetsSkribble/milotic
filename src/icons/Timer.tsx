import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Timer: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6.587 4.809A9 9 0 1 0 12 3v4m0 6L8 9" />
  </Svg>
);

Timer.defaultProps = defaultProps;
export default Timer;
