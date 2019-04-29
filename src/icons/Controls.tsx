import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Controls: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M17 18V6m-5 12V6M7 18V6M5 8h4m1 8h4m1-4h4" />
  </Svg>
);

Controls.defaultProps = defaultProps;
export default Controls;
