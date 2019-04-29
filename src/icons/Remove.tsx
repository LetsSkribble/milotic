import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Remove: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M17 12H7" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

Remove.defaultProps = defaultProps;
export default Remove;
