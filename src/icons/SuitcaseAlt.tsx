import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const SuitcaseAlt: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 7h18v12H3z" />
    <Path d="M8 3h8v16H8z" />
  </Svg>
);

SuitcaseAlt.defaultProps = defaultProps;
export default SuitcaseAlt;
