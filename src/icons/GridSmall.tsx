import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const GridSmall: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6 6h4v4H6zM13 6h4v4h-4zM6 13h4v4H6zM13 13h4v4h-4z" />
  </Svg>
);

GridSmall.defaultProps = defaultProps;
export default GridSmall;
