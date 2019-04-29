import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Repeat: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M2 13.04V11a6 6 0 0 1 6-6h13" />
    <Path d="M20 3l2 2-2 2M22 9.98v2.04a6 6 0 0 1-6 6H3" />
    <Path d="M4 20.02l-2-2 2-2" />
  </Svg>
);

Repeat.defaultProps = defaultProps;
export default Repeat;
