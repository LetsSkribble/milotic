import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Person: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M4 20c0-3 4-3 6-5 1-1-2-1-2-6 0-3.333 1.333-5 4-5s4 1.667 4 5c0 5-3 5-2 6 2 2 6 2 6 5" />
  </Svg>
);

Person.defaultProps = defaultProps;
export default Person;
