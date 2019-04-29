import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Search: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M14.412 14.412L20 20" />
    <Circle cx={10} cy={10} r={6} />
  </Svg>
);

Search.defaultProps = defaultProps;
export default Search;
