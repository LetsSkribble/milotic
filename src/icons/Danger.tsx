import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Danger: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M12 10v3M12.862 4.465l8.252 14.028A1 1 0 0 1 20.252 20H3.748a1 1 0 0 1-.862-1.507l8.252-14.028a1 1 0 0 1 1.724 0z" />
  </Svg>
);

Danger.defaultProps = defaultProps;
export default Danger;
