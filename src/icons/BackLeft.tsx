import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const BackLeft: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M5 17v-2c0-4.97 3.806-9 8.5-9s8.5 4.03 8.5 9" />
    <Path d="M8 15l-3 3-3-3" />
  </Svg>
);

BackLeft.defaultProps = defaultProps;
export default BackLeft;
