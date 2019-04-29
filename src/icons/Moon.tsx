import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Moon: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M10.424 3a8 8 0 0 0 10.152 10.152A8 8 0 1 1 10.424 3z" />
  </Svg>
);

Moon.defaultProps = defaultProps;
export default Moon;
