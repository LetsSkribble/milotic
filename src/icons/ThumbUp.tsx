import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ThumbUp: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M8 8.74a2 2 0 0 1 .481-1.302l4.791-5.59A1.432 1.432 0 0 1 15 1.5c.574.287.85.952.646 1.56L14 8h4.604a2 2 0 0 1 1.967 2.358l-1.272 7A2 2 0 0 1 17.33 19H10a2 2 0 0 1-2-2V8.74zM4 18V9" />
  </Svg>
);

ThumbUp.defaultProps = defaultProps;
export default ThumbUp;
