import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const SunCloud: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6.417 18a3.75 3.75 0 1 1 1.009-7.363 5.001 5.001 0 0 1 9.342 1.55A2.917 2.917 0 0 1 16.417 18h-10z" />
    <Path d="M18.034 12.832A4.003 4.003 0 0 0 20.882 9 4 4 0 0 0 13 8.032" />
  </Svg>
);

SunCloud.defaultProps = defaultProps;
export default SunCloud;
