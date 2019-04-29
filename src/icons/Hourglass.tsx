import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Hourglass: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M16.765 7.821V5a2 2 0 0 0-2-2h-5.53a2 2 0 0 0-2 2v2.821L11.415 12l-4.18 4.179V19a2 2 0 0 0 2 2h5.53a2 2 0 0 0 2-2v-2.821L12.585 12l4.18-4.179z" />
  </Svg>
);

Hourglass.defaultProps = defaultProps;
export default Hourglass;
