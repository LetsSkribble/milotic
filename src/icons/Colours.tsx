import React from "react";
import Svg, { Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Colours: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={12} cy={9} r={5} />
    <Circle cx={9} cy={14} r={5} />
    <Circle cx={15} cy={14} r={5} />
  </Svg>
);

Colours.defaultProps = defaultProps;
export default Colours;
