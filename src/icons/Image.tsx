import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Image: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 3h18v18H3z" />
    <Path d="M3 14l4-4 11 11" />
    <Circle cx={13.5} cy={7.5} r={2.5} />
    <Path d="M13.5 16.5L21 9" />
  </Svg>
);

Image.defaultProps = defaultProps;
export default Image;
