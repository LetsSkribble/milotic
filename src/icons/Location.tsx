import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Location: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M12 21c4-4.2 6-8.2 6-12A6 6 0 1 0 6 9c0 3.8 2 7.8 6 12z" />
    <Circle cx={12} cy={9} r={1} />
  </Svg>
);

Location.defaultProps = defaultProps;
export default Location;
