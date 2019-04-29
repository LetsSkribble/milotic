import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Forward: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M10 14.74L3 19V5l7 4.26V5l12 7-12 7v-4.26z" />
  </Svg>
);

Forward.defaultProps = defaultProps;
export default Forward;
