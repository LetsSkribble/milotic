import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ChatAlt: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M13 17l-6 4v-4H3V4h18v13h-8z" />
  </Svg>
);

ChatAlt.defaultProps = defaultProps;
export default ChatAlt;
