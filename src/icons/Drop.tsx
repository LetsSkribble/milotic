import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Drop: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M12 21c3.314 0 6-2.61 6-6 0-3.333-2-7-6-11-4 4-6 7.667-6 11 0 3.39 2.686 6 6 6z" />
  </Svg>
);

Drop.defaultProps = defaultProps;
export default Drop;
