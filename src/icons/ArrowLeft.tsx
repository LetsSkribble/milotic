import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ArrowLeft: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M9 6l-6 6 6 6M21 12H4M3 12h1" />
  </Svg>
);

ArrowLeft.defaultProps = defaultProps;
export default ArrowLeft;
