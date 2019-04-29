import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Alarm: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={12} cy={13} r={9} />
    <Path d="M12 8v5l3 3M19 2l3 3M2 5l3-3" />
  </Svg>
);

Alarm.defaultProps = defaultProps;
export default Alarm;
