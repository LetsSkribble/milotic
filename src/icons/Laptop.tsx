import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Laptop: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M20 7v11H4V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zM2 18h20M4 17h16" />
  </Svg>
);

Laptop.defaultProps = defaultProps;
export default Laptop;
