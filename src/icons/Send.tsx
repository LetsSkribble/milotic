import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Send: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M21.368 12.001L3 21.609V14l8-2-8-2.206v-7.4z" />
  </Svg>
);

Send.defaultProps = defaultProps;
export default Send;
