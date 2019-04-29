import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const History: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M1 12l2 2 2-2M12 7v5l3 3" />
    <Path d="M12 21a9 9 0 1 0-9-9v1" />
  </Svg>
);

History.defaultProps = defaultProps;
export default History;
