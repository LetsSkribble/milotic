import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const ShareIos: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M12 3v12M9 5l3-3 3 3M6 9h12v12H6z" />
  </Svg>
);

ShareIos.defaultProps = defaultProps;
export default ShareIos;
