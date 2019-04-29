import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Time: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={12} cy={12} r={10} />
    <Path d="M12 5v7l4 4" />
  </Svg>
);

Time.defaultProps = defaultProps;
export default Time;
