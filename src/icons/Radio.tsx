import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Radio: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M5.45 6c-3.267 3.266-3.267 8.734 0 12M8.6 8c-2.133 2.132-2.133 5.868 0 8m9.95 2c3.267-3.266 3.267-8.734 0-12M15.4 16c2.133-2.132 2.133-5.868 0-8" />
    <Circle cx={12} cy={12} r={1} />
  </Svg>
);

Radio.defaultProps = defaultProps;
export default Radio;
