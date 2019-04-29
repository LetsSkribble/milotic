import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Support: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M21 12h-2a2 2 0 0 0-2 2v2a2 2 0 1 0 4 0v-4a9 9 0 0 0-18 0v4a2 2 0 1 0 4 0v-2a2 2 0 0 0-2-2H3" />
    <Path d="M21 14v4c0 2-.667 3-2 3h-5" />
  </Svg>
);

Support.defaultProps = defaultProps;
export default Support;
