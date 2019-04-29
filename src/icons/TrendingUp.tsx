import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const TrendingUp: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 17l6-6 4 4 7.405-7.405M20.405 7.595L21 7" />
    <Path d="M21 10V7h-3" />
  </Svg>
);

TrendingUp.defaultProps = defaultProps;
export default TrendingUp;
