import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Redo: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M16 15h5v-5M19 13C14 8 6.425 8.725 3 14M21 15l-2-2" />
  </Svg>
);

Redo.defaultProps = defaultProps;
export default Redo;
