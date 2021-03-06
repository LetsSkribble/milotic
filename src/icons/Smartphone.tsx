import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Smartphone: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18 3v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1zM11 19h2" />
  </Svg>
);

Smartphone.defaultProps = defaultProps;
export default Smartphone;
