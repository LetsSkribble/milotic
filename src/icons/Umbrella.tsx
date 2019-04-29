import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Umbrella: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M22 11c0-4.97-4.477-9-10-9S2 6.03 2 11h20zM17 19v.5a2.5 2.5 0 1 1-5 0V12M12 12v-1" />
  </Svg>
);

Umbrella.defaultProps = defaultProps;
export default Umbrella;
