import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Star: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M12 17.844l-5.817 3.058 1.111-6.477-4.706-4.587 6.504-.945L12 3l2.908 5.893 6.504.945-4.706 4.587 1.111 6.477z" />
  </Svg>
);

Star.defaultProps = defaultProps;
export default Star;
