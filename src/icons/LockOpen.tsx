import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const LockOpen: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M7 7.625V7a5 5 0 0 1 10 0v4M5 11h14v10H5z" />
  </Svg>
);

LockOpen.defaultProps = defaultProps;
export default LockOpen;
