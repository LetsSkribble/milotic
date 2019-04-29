import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const TrendingDown: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 7l6 6 4-4 7.405 7.405M20.405 16.405L21 17" />
    <Path d="M21 14v3h-3" />
  </Svg>
);

TrendingDown.defaultProps = defaultProps;
export default TrendingDown;
