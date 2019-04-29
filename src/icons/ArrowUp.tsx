import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ArrowUp: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18 9l-6-6-6 6M12 21V4M12 3v1" />
  </Svg>
);

ArrowUp.defaultProps = defaultProps;
export default ArrowUp;
