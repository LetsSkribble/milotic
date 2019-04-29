import React from "react";
import Svg, { Rect, Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const CreditCard: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Rect width={20} height={14} x={2} y={5} rx={2} />
    <Path d="M2 14h20" />
  </Svg>
);

CreditCard.defaultProps = defaultProps;
export default CreditCard;
