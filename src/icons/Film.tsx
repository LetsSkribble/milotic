import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Film: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M16 10.087l5-1.578v7.997l-4.998-1.578M16 7H3v11h13z" />
  </Svg>
);

Film.defaultProps = defaultProps;
export default Film;
