import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const StatsAlt: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M14 6H8m13 4H8m-4 8V6m14 8H8m2 4H8" />
  </Svg>
);

StatsAlt.defaultProps = defaultProps;
export default StatsAlt;
