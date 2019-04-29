import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Cup: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6 2h12v9a6 6 0 1 1-12 0V2zm1 19h10M12 17v4M6 5v6H5a3 3 0 1 1 0-6h1zm12 6V5h1a3 3 0 0 1 0 6h-1z" />
  </Svg>
);

Cup.defaultProps = defaultProps;
export default Cup;
