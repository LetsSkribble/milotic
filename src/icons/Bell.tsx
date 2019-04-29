import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Bell: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18 9v5c0 2 .667 3.333 2 4H4c1.333-.667 2-2 2-4V9a6 6 0 1 1 12 0zM10 18a2 2 0 1 0 4 0" />
  </Svg>
);

Bell.defaultProps = defaultProps;
export default Bell;
