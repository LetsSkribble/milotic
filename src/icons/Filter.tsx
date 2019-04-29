import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Filter: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M10 12.261L4.028 3.972h16L14 12.329V17l-4 3z" />
  </Svg>
);

Filter.defaultProps = defaultProps;
export default Filter;
