import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Chart: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M2 12v9h4v-9zM18 7v14h4V7zM10 3v18h4V3z" />
  </Svg>
);

Chart.defaultProps = defaultProps;
export default Chart;
