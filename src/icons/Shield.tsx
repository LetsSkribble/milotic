import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Shield: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M19 14.737c0 2.386-2.333 4.474-7 6.263-4.667-1.79-7-3.877-7-6.263V5.789C8.136 4.596 10.47 4 12 4c1.53 0 3.864.596 7 1.79v8.947z" />
  </Svg>
);

Shield.defaultProps = defaultProps;
export default Shield;
