import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Basket: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M14 4l6 6-1.372 9H5.372L4 10l6-6M4 10h16" />
  </Svg>
);

Basket.defaultProps = defaultProps;
export default Basket;
