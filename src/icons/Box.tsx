import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Box: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M12 2l9 5v10l-9 5-9-5V7z" />
    <Path d="M3 7l9 5 9-5M12 12v10" />
  </Svg>
);

Box.defaultProps = defaultProps;
export default Box;
