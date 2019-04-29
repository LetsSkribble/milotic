import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const BackRight: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M19 17v-2c0-4.97-3.806-9-8.5-9S2 10.03 2 15" />
    <Path d="M16 15l3 3 3-3" />
  </Svg>
);

BackRight.defaultProps = defaultProps;
export default BackRight;
