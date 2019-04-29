import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const SadFace: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M8 16c1.333-.667 2.666-1 3.997-.999 1.335 0 2.67.332 4.003.999" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

SadFace.defaultProps = defaultProps;
export default SadFace;
