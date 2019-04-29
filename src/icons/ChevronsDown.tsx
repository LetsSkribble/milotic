import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ChevronsDown: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
  </Svg>
);

ChevronsDown.defaultProps = defaultProps;
export default ChevronsDown;
