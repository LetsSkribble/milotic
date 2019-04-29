import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Rotate: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M22 12l-3 3-3-3M2 12l3-3 3 3" />
    <Path d="M19.016 14v-1.95A7.05 7.05 0 0 0 8 6.22M16.016 17.845A7.05 7.05 0 0 1 5 12.015V10M5 10V9M19 15v-1" />
  </Svg>
);

Rotate.defaultProps = defaultProps;
export default Rotate;
