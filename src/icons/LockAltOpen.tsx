import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const LockAltOpen: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M7 7.625V7a5 5 0 0 1 10 0v4M5 11h14v10H5z" />
    <Circle cx={12} cy={16} r={1} />
  </Svg>
);

LockAltOpen.defaultProps = defaultProps;
export default LockAltOpen;
