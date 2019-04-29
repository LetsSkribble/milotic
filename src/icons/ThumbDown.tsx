import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ThumbDown: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M16 15.26a2 2 0 0 1-.481 1.302l-4.791 5.59A1.432 1.432 0 0 1 9 22.5a1.29 1.29 0 0 1-.646-1.56L10 16H5.396a2 2 0 0 1-1.967-2.358l1.272-7A2 2 0 0 1 6.67 5H14a2 2 0 0 1 2 2v8.26zM20 15V6" />
  </Svg>
);

ThumbDown.defaultProps = defaultProps;
export default ThumbDown;
