import React from "react";
import Svg, { Circle as SvgCircle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Circle: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <SvgCircle cx={12} cy={12} r={8} />
  </Svg>
);

Circle.defaultProps = defaultProps;
export default Circle;
