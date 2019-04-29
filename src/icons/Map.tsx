import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Map: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M9 19l-6 2V5l6-2 6 2 6-2v15.5L15 21zM15 5v16M9 3v16" />
  </Svg>
);

Map.defaultProps = defaultProps;
export default Map;
