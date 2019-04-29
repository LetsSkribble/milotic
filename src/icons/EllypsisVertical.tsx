import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const EllypsisVertical: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M11 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0z" />
  </Svg>
);

EllypsisVertical.defaultProps = defaultProps;
export default EllypsisVertical;
