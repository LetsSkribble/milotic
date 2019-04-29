import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Restaurant: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M8 4v16m10-8c-2-.667-3-2-3-4s1-3.333 3-4v16-8zM5 4v3a3 3 0 1 0 6 0V4" />
  </Svg>
);

Restaurant.defaultProps = defaultProps;
export default Restaurant;
