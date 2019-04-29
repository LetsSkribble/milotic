import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const HomeAlt: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 10.182V22h18V10.182L12 2z" />
    <Path d="M9 14h6v8H9z" />
  </Svg>
);

HomeAlt.defaultProps = defaultProps;
export default HomeAlt;
