import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const AlignRight: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M10 10h8M6 6h12M6 14h12m-8 4h8" />
  </Svg>
);

AlignRight.defaultProps = defaultProps;
export default AlignRight;
