import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Explore: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M14.121 14.121L7.05 16.95l2.829-7.071L16.95 7.05z" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

Explore.defaultProps = defaultProps;
export default Explore;
