import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Bookmark: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M17 6.659v12.927l-5-3.178-5 3.178V6.659C7 5.19 8.12 4 9.5 4h5C15.88 4 17 5.19 17 6.659z" />
  </Svg>
);

Bookmark.defaultProps = defaultProps;
export default Bookmark;
