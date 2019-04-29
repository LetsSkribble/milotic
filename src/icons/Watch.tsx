import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Watch: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M10 7.758V2h5v5.758M15 15.242V22h-5v-6.758" />
    <Circle cx={12.5} cy={11.5} r={4.5} />
  </Svg>
);

Watch.defaultProps = defaultProps;
export default Watch;
