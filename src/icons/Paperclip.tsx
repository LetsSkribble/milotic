import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Paperclip: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M7.935 13.78l7.227-7.227a2.253 2.253 0 0 1 3.181 0 2.252 2.252 0 0 1 0 3.182l-9.942 9.813a3.748 3.748 0 0 1-5.302 0 3.748 3.748 0 0 1 0-5.303l9.835-9.707a5.248 5.248 0 0 1 7.423 0 5.248 5.248 0 0 1 .001 7.424l-7.119 7.12" />
  </Svg>
);

Paperclip.defaultProps = defaultProps;
export default Paperclip;
