import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Back: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M14 14.74L21 19V5l-7 4.26V5L2 12l12 7v-4.26z" />
  </Svg>
);

Back.defaultProps = defaultProps;
export default Back;
