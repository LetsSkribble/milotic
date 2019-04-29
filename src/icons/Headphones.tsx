import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Headphones: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M21 13h-2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-4a9 9 0 0 0-18 0v4a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2H3" />
  </Svg>
);

Headphones.defaultProps = defaultProps;
export default Headphones;
