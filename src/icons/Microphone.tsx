import React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Microphone: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M17 12a5 5 0 0 1-10 0m5 5v4" />
    <Rect width={4} height={10} x={10} y={4} rx={2} />
  </Svg>
);

Microphone.defaultProps = defaultProps;
export default Microphone;
