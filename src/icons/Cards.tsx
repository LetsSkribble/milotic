import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Cards: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M3 3h13v13H3z" />
    <Path d="M16 8h5v13H8v-5" />
  </Svg>
);

Cards.defaultProps = defaultProps;
export default Cards;
