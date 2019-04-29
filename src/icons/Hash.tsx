import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Hash: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M11 3L5 21M19 3l-6 18M3 16h16M5 8h16" />
  </Svg>
);

Hash.defaultProps = defaultProps;
export default Hash;
