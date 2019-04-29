import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Bug: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M15 7a2 2 0 0 1 2 2v7.459a2 2 0 0 1-.853 1.638L12 21l-4.147-2.903A2 2 0 0 1 7 16.46v-7.46a2 2 0 0 1 2-2 3 3 0 0 1 6 0zM4 13h3M3 7l2 2h2M21 7l-2 2h-2M3 19l2-2h2M17 17h2l2 2M17 13h3" />
  </Svg>
);

Bug.defaultProps = defaultProps;
export default Bug;
