import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Exit: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18 15l3-3-3-3M11.5 12H20M21 12h-1M15 4v16H4V4z" />
  </Svg>
);

Exit.defaultProps = defaultProps;
export default Exit;
