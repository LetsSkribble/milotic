import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Anchor: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M12 20V7m-3 3h6" />
    <Circle cx={12} cy={5} r={2} />
    <Path d="M20 14c-1.333 4-4 6-8 6s-6.667-2-8-6" />
  </Svg>
);

Anchor.defaultProps = defaultProps;
export default Anchor;
