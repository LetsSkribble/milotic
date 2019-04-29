import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Rss: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M10 18a4 4 0 0 0-4-4m8 4a8 8 0 0 0-8-8m12 8c0-6.627-5.373-12-12-12" />
  </Svg>
);

Rss.defaultProps = defaultProps;
export default Rss;
