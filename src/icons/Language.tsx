import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Language: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Circle cx={12} cy={12} r={10} />
    <Path d="M12 22c2.667-2.424 4-5.758 4-10s-1.333-7.576-4-10C9.333 4.424 8 7.758 8 12s1.333 7.576 4 10zM2.5 9h19m-19 6h19" />
  </Svg>
);

Language.defaultProps = defaultProps;
export default Language;
