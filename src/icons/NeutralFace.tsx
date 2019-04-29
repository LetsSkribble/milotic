import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const NeutralFace: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M15 9" />
    <Path d="M16 15H8" opacity={0.9} />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);

NeutralFace.defaultProps = defaultProps;
export default NeutralFace;
