import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Flag: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M5 20v-5c1.333-1.333 3-2 5-2 3 0 4 2 6 2 1 0 2-.333 3-1V5c-1 .667-2 1-3 1-2 0-3-2-6-2-2 0-3.667.667-5 2v9" />
  </Svg>
);

Flag.defaultProps = defaultProps;
export default Flag;
