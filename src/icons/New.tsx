import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const New: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M19 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9" />
    <Path d="M21.29 2.04l.67.67a2 2 0 0 1 0 2.83L12 15.5H8.5V12l9.96-9.96a2 2 0 0 1 2.83 0zm-4.04 1.21l3.5 3.5" />
  </Svg>
);

New.defaultProps = defaultProps;
export default New;
