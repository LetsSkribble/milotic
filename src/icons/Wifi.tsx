import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Wifi: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M21.228 11.036c-4.99-4.99-13.081-4.99-18.071 0m14.457 3.614a7.667 7.667 0 0 0-10.843 0M14 18.264a2.556 2.556 0 0 0-3.614 0" />
  </Svg>
);

Wifi.defaultProps = defaultProps;
export default Wifi;
