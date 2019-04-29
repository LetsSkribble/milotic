import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Calendar: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 5h18v16H3zM21 10H3m5-3V3m8 4V3" />
  </Svg>
);

Calendar.defaultProps = defaultProps;
export default Calendar;
