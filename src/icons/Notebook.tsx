import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Notebook: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M9 8h5M18 3v18H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12z" />
    <Path d="M5 19v-1a1 1 0 0 1 1-1h12" />
  </Svg>
);

Notebook.defaultProps = defaultProps;
export default Notebook;
