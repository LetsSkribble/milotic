import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ArrowDown: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6 15l6 6 6-6M12 3v17M12 21v-1" />
  </Svg>
);

ArrowDown.defaultProps = defaultProps;
export default ArrowDown;
