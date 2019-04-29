import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Aperture: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={12} cy={12} r={10} />
    <Path d="M3 16h11M4.036 6.206l5.647 9.78m3.353-13.78l-5.57 9.648m3.498 9.94l5.65-9.787m3.35 5.787l-5.64-9.768M21 8H10" />
  </Svg>
);

Aperture.defaultProps = defaultProps;
export default Aperture;
