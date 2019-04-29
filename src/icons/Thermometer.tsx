import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Thermometer: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M10 13.535V5a2 2 0 1 1 4 0v8.535a4 4 0 1 1-4 0z" />
  </Svg>
);

Thermometer.defaultProps = defaultProps;
export default Thermometer;
