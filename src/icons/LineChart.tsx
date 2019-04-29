import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const LineChart: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 16l5-5" />
    <Circle cx={9} cy={10} r={1} />
    <Circle cx={14} cy={15} r={1} />
    <Path d="M10 11l3 3m2 0l6-6" />
  </Svg>
);

LineChart.defaultProps = defaultProps;
export default LineChart;
