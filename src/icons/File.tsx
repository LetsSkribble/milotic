import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const File: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M13 3v6h6" />
    <Path d="M13 3l6 6v12H5V3z" />
  </Svg>
);

File.defaultProps = defaultProps;
export default File;
