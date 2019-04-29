import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Phone: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M12.74 18.404l3.158-3.157 5.217 3.638-1.17 1.17a3 3 0 0 1-2.98.754c-3.23-.965-6.13-2.734-8.703-5.306C5.689 12.93 3.92 10.03 2.956 6.8a3 3 0 0 1 .753-2.98l1.17-1.17 3.639 5.217-3.157 3.157" />
  </Svg>
);

Phone.defaultProps = defaultProps;
export default Phone;
