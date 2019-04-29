import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ZoomIn: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M4 20l5.588-5.588M14 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM16.667 10h-5.334M14 7.333v5.334" />
  </Svg>
);

ZoomIn.defaultProps = defaultProps;
export default ZoomIn;
