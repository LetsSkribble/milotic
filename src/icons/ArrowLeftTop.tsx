import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ArrowLeftTop: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M5 13V5h8M5 5l1 1M6 6l13 13" />
  </Svg>
);

ArrowLeftTop.defaultProps = defaultProps;
export default ArrowLeftTop;
