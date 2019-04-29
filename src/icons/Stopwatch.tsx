import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Stopwatch: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={12} cy={13} r={8} />
    <Path d="M12 9v4m6-6l2-2m-5-3H9" />
  </Svg>
);

Stopwatch.defaultProps = defaultProps;
export default Stopwatch;
