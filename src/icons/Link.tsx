import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Link: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M9 7H7a5 5 0 0 0 0 10h2M8 12h8M15 17h2a5 5 0 0 0 0-10h-2" />
  </Svg>
);

Link.defaultProps = defaultProps;
export default Link;
