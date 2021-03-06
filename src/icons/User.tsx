import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const User: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M5.5 19.5c2.333-1 3.833-1.833 4.5-2.5 1-1-2-1-2-6 0-3.333 1.333-5 4-5s4 1.667 4 5c0 5-3 5-2 6 .667.667 2.167 1.5 4.5 2.5" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

User.defaultProps = defaultProps;
export default User;
