import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ArrowLeftBottom: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M5 11v8h8M5 19l1-1M6 18L19 5" />
  </Svg>
);

ArrowLeftBottom.defaultProps = defaultProps;
export default ArrowLeftBottom;
