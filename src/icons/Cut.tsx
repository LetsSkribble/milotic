import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Cut: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 18l12-9m0 6L3 6" />
    <Circle cx={18} cy={7} r={3} />
    <Circle cx={18} cy={17} r={3} />
  </Svg>
);

Cut.defaultProps = defaultProps;
export default Cut;
