import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Sticker: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M21 3v8c0 5.523-4.477 10-10 10H3V3h18z" />
    <Path d="M9 21c2.667 0 4-1.333 4-4v-4h4c2.667 0 4-1.333 4-4" />
  </Svg>
);

Sticker.defaultProps = defaultProps;
export default Sticker;
