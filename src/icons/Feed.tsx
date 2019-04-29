import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Feed: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={7.5} cy={7.5} r={2.5} />
    <Path d="M22 13H2M18 6h-5m5 3h-5M5 2h14a3 3 0 0 1 3 3v17H2V5a3 3 0 0 1 3-3z" />
  </Svg>
);

Feed.defaultProps = defaultProps;
export default Feed;
