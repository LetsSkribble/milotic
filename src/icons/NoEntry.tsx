import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const NoEntry: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M16 3l5 5v8l-5 5H8l-5-5V8l5-5z" />
    <Path d="M7 10h10v4H7z" />
  </Svg>
);

NoEntry.defaultProps = defaultProps;
export default NoEntry;
