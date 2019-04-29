import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Tool: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M9.743 13.743a6 6 0 0 1-7.158-8.33L6.95 9.778 9.778 6.95 5.413 2.585a6 6 0 0 1 8.057 7.885l7.116 7.116a2 2 0 0 1 0 2.828l-.672.672a2 2 0 0 1-2.828 0l-7.343-7.343z" />
  </Svg>
);

Tool.defaultProps = defaultProps;
export default Tool;
