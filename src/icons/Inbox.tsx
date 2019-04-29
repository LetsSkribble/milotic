import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Inbox: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 10h6v3h6v-3h6" />
    <Path d="M3 10l3-6h13l2 6v10H3z" />
  </Svg>
);

Inbox.defaultProps = defaultProps;
export default Inbox;
