import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Hdr: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18 12h1l2 3" />
    <Path d="M7 9v6m3-6v6h2c1.333 0 2-1 2-3s-.667-3-2-3h-2zm7 6V9h3c.667 0 1 .5 1 1.5s-.333 1.5-1 1.5h-3M7 12H3m0-3v6" />
  </Svg>
);

Hdr.defaultProps = defaultProps;
export default Hdr;
