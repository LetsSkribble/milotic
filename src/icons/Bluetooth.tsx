import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Bluetooth: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M7 17L17 7l-5-5v20l5-5L7 7" />
  </Svg>
);

Bluetooth.defaultProps = defaultProps;
export default Bluetooth;
