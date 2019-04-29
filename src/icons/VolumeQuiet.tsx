import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const VolumeQuiet: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M13 5v14l-5-4H3V9h5zM13 14c1.5-1 1.5-3 0-4M16 16c2.086-2.086 2.086-5.914 0-8" />
  </Svg>
);

VolumeQuiet.defaultProps = defaultProps;
export default VolumeQuiet;
