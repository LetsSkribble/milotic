import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Crossing: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M5.715 20.387l8.737-10.89A4 4 0 0 1 17.572 8H21" />
    <Path d="M19 5l3 3-3 3M3 8h3.428a4 4 0 0 1 3.12 1.497l8.737 10.89" />
    <Path d="M5 11L2 8l3-3" />
  </Svg>
);

Crossing.defaultProps = defaultProps;
export default Crossing;
