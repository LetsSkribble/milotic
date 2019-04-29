import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Horn: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6.5 9H12c2 0 4.333-1.667 7-5v15c-2.667-3.333-5-5-7-5H6.5a2.5 2.5 0 1 1 0-5z" />
    <Path d="M7 14l2 6h4l-2-6zM11 9v5" />
  </Svg>
);

Horn.defaultProps = defaultProps;
export default Horn;
