import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const TagAlt: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={10} cy={12} r={1} />
    <Path d="M8 18l-6-6 6-6h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8z" />
  </Svg>
);

TagAlt.defaultProps = defaultProps;
export default TagAlt;
