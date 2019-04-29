import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Cart: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6 6h15l-1.5 9h-12z" />
    <Circle cx={9} cy={19} r={1} />
    <Circle cx={18} cy={19} r={1} />
    <Path d="M6 6H3" />
  </Svg>
);

Cart.defaultProps = defaultProps;
export default Cart;
