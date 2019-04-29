import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Glasses: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M14 12c-.597-.667-1.264-1-2-1s-1.403.333-2 1M20 12h2M2 12h2" />
    <Circle cx={7} cy={12} r={3} />
    <Circle cx={17} cy={12} r={3} />
  </Svg>
);

Glasses.defaultProps = defaultProps;
export default Glasses;
