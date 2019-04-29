import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Minimise: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M8 3v5H3M21 8h-5V3M3 16h5v5M16 21v-5h5" />
  </Svg>
);

Minimise.defaultProps = defaultProps;
export default Minimise;
