import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Sorting: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M8 8.333l4-4 4 4M16 15.667l-4 4-4-4" />
  </Svg>
);

Sorting.defaultProps = defaultProps;
export default Sorting;
