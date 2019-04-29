import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Return: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M19 8v3a2 2 0 0 1-2 2H6" />
    <Path d="M8 16l-3-3 3-3" />
  </Svg>
);

Return.defaultProps = defaultProps;
export default Return;
