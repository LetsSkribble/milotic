import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const News: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M22 5v12c0 1.333-.667 2-2 2s-2-.667-2-2V5H2v11c0 2 1 3 3 3h15M6 14h1m4 0h3m-8-4h8" />
  </Svg>
);

News.defaultProps = defaultProps;
export default News;
