import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Help: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M12 14c0-2 1.576-2.335 2.119-2.876a3 3 0 1 0-4.952-3.113M12 17" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

Help.defaultProps = defaultProps;
export default Help;
