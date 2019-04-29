import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const DirectionRight: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M5 21v-8.167C5 8.944 6.944 7 10.833 7H18" />
    <Path d="M16 4l3 3-3 3" />
  </Svg>
);

DirectionRight.defaultProps = defaultProps;
export default DirectionRight;
