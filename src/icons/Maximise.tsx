import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Maximise: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M21 16v5h-5M8 21H3v-5M16 3h5v5M3 8V3h5" />
  </Svg>
);

Maximise.defaultProps = defaultProps;
export default Maximise;
