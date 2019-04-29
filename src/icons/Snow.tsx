import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Snow: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M19.051 17.957C20.5 17.97 22 16.245 22 14.5a3.5 3.5 0 0 0-3.079-3.475 6.002 6.002 0 0 0-11.21-1.86A4.504 4.504 0 0 0 2 13.5c0 2.311 1.5 4.47 3.986 4.47H7m9 .03h-6m1.5-2.598l3 5.196m.263-5.025l-3.526 4.854" />
  </Svg>
);

Snow.defaultProps = defaultProps;
export default Snow;
