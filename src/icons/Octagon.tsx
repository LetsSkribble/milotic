import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Octagon: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M16 3l5 5v8l-5 5H8l-5-5V8l5-5z" />
  </Svg>
);

Octagon.defaultProps = defaultProps;
export default Octagon;
