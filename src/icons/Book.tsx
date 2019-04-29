import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Book: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M19 3v18H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h11z" />
    <Path d="M5 18a3 3 0 0 1 3-3h11" />
  </Svg>
);

Book.defaultProps = defaultProps;
export default Book;
