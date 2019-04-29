import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Sunset: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M9.354 17a4 4 0 1 1 5.292 0H9.354zM12 7V5m10 12H2h20zM5 14H2h3zm17 0h-3 3zm-5.293-4.172l2.121-2.12-2.12 2.12zm-12-2.12l2.121 2.12-2.12-2.12z" />
  </Svg>
);

Sunset.defaultProps = defaultProps;
export default Sunset;
