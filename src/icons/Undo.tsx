import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Undo: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M8 15H3v-5M5 13c5-5 12.575-4.275 16 1M3 15l2-2" />
  </Svg>
);

Undo.defaultProps = defaultProps;
export default Undo;
