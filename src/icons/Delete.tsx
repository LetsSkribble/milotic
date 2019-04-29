import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Delete: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M20 18H9l-6-6 6-6h11zM12.114 10.114l3.772 3.772m-3.772 0l3.772-3.772" />
  </Svg>
);

Delete.defaultProps = defaultProps;
export default Delete;
