import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Voicemail: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18 16H6" />
    <Circle cx={6} cy={12} r={4} />
    <Circle cx={18} cy={12} r={4} />
  </Svg>
);

Voicemail.defaultProps = defaultProps;
export default Voicemail;
