import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ArrowRightTop: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M19 13V5h-8M19 5l-1 1M18 6L5 19" />
  </Svg>
);

ArrowRightTop.defaultProps = defaultProps;
export default ArrowRightTop;
