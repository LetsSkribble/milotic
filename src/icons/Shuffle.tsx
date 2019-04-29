import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Shuffle: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M21 8h-3.23a6 6 0 0 0-4.909 2.551l-2.064 2.938a6 6 0 0 1-4.91 2.55H2" />
    <Path d="M21 16.04h-3.23a6 6 0 0 1-4.909-2.551l-2.064-2.938A6 6 0 0 0 5.887 8H3M20 6l2 2-2 2" />
    <Path d="M20 14l2 2-2 2" />
  </Svg>
);

Shuffle.defaultProps = defaultProps;
export default Shuffle;
