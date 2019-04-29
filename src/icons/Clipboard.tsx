import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Clipboard: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M15 3h4v18H5V3h4" />
    <Path d="M14 4h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 0 2z" />
  </Svg>
);

Clipboard.defaultProps = defaultProps;
export default Clipboard;
