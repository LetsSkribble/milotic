import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Signal: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18 5C11.373 5 6 10.373 6 17m12-8a8 8 0 0 0-8 8m8-4a4 4 0 0 0-4 4" />
  </Svg>
);

Signal.defaultProps = defaultProps;
export default Signal;
