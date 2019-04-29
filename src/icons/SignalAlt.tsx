import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const SignalAlt: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M20.182 19C21.405 17.376 22 15.435 22 13.353 22 7.634 17.523 3 12 3S2 7.634 2 13.353c0 2.052.578 3.966 1.818 5.647" />
    <Path d="M16 16c.702-.812 1-1.782 1-3 0-2.683-2.239-5-5-5s-5 2.317-5 5c0 1.203.289 2.16 1 3" />
  </Svg>
);

SignalAlt.defaultProps = defaultProps;
export default SignalAlt;
