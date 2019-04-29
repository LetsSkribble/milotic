import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Lightbulb: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M16 12c-.667.667-1 2-1 4v1H9v-1c0-2-.333-3.333-1-4-2.326-2.326-2.586-5.9-.243-8.243a6 6 0 0 1 8.486 0C18.586 6.101 18.407 9.593 16 12zm-6 9h4" />
  </Svg>
);

Lightbulb.defaultProps = defaultProps;
export default Lightbulb;
