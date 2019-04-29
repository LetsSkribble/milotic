import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ShareAndroid: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M16 8l-8 3 8-3zm0 8l-8-3 8 3z" />
    <Circle cx={6} cy={12} r={2} />
    <Circle cx={18} cy={7} r={2} />
    <Circle cx={18} cy={17} r={2} />
  </Svg>
);

ShareAndroid.defaultProps = defaultProps;
export default ShareAndroid;
