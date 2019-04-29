import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Video: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18 12l-9 4.9V7z" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

Video.defaultProps = defaultProps;
export default Video;
