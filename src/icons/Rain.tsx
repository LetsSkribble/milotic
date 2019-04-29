import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Rain: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M16 18l1 3m-4-3l1 3m-4-3l1 3m8.051-3.043C20.5 17.97 22 16.245 22 14.5a3.5 3.5 0 0 0-3.079-3.475 6.002 6.002 0 0 0-11.21-1.86A4.504 4.504 0 0 0 2 13.5c0 2.311 1.5 4.47 3.986 4.47H7" />
  </Svg>
);

Rain.defaultProps = defaultProps;
export default Rain;
