import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Shift: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M5 21h14H5zm11-9v5H8v-5H3l9-9 9 9h-5z" />
  </Svg>
);

Shift.defaultProps = defaultProps;
export default Shift;
