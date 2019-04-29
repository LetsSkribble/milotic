import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ArrowRightBottom: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M19 11v8h-8M19 19l-1-1M18 18L5 5" />
  </Svg>
);

ArrowRightBottom.defaultProps = defaultProps;
export default ArrowRightBottom;
