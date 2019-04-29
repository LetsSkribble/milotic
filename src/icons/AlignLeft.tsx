import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const AlignLeft: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6 10h8M6 6h12M6 14h12M6 18h8" />
  </Svg>
);

AlignLeft.defaultProps = defaultProps;
export default AlignLeft;
