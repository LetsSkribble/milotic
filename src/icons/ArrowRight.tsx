import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ArrowRight: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M15 18l6-6-6-6M3 12h17M21 12h-1" />
  </Svg>
);

ArrowRight.defaultProps = defaultProps;
export default ArrowRight;
