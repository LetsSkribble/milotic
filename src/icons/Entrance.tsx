import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Entrance: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M11 15l3-3-3-3M4.5 12H13M14 12h-1" />
    <Path d="M18 4v16H7V4z" />
  </Svg>
);

Entrance.defaultProps = defaultProps;
export default Entrance;
