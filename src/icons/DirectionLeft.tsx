import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const DirectionLeft: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6 7h7.167C17.056 7 19 8.944 19 12.833V21" />
    <Path d="M8 10L5 7l3-3" />
  </Svg>
);

DirectionLeft.defaultProps = defaultProps;
export default DirectionLeft;
