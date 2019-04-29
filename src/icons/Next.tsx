import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Next: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M17 11.5L6 18V5zM18 18V5" />
  </Svg>
);

Next.defaultProps = defaultProps;
export default Next;
