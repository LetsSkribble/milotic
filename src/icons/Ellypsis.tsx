import React from "react";
import Svg, { Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Ellypsis: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={12} cy={12} r={1} />
    <Circle cx={6} cy={12} r={1} />
    <Circle cx={18} cy={12} r={1} />
  </Svg>
);

Ellypsis.defaultProps = defaultProps;
export default Ellypsis;
