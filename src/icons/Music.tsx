import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Music: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M8 18V6l12-3v13" />
    <Path d="M5.947 20.51c-1.468.535-2.946.175-3.302-.804-.356-.978.545-2.205 2.012-2.739 1.468-.534 2.947-.174 3.303.805.356.978-.545 2.204-2.013 2.738zm12-2c-1.468.535-2.946.175-3.302-.804-.356-.978.545-2.205 2.012-2.739 1.468-.534 2.947-.174 3.303.805.356.978-.545 2.204-2.013 2.738z" />
  </Svg>
);

Music.defaultProps = defaultProps;
export default Music;
