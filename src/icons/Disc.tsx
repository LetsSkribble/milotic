import React from "react";
import Svg, { Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Disc: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={12} cy={12} r={10} />
    <Circle cx={12} cy={12} r={4} />
  </Svg>
);

Disc.defaultProps = defaultProps;
export default Disc;
