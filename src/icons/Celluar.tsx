import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Celluar: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18 7v11m-4-8v8m-4-5v5m-4-2v2" />
  </Svg>
);

Celluar.defaultProps = defaultProps;
export default Celluar;
