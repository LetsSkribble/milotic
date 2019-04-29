import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Cloud: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6.5 18a4.5 4.5 0 1 1 1.21-8.835 6.002 6.002 0 0 1 11.21 1.86 3.5 3.5 0 0 1-.42 6.975h-12z" />
  </Svg>
);

Cloud.defaultProps = defaultProps;
export default Cloud;
