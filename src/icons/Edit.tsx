import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Edit: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M18.414 4.414l1.172 1.172a2 2 0 0 1 0 2.828L8 20H4v-4L15.586 4.414a2 2 0 0 1 2.828 0zM14 6l4 4" />
  </Svg>
);

Edit.defaultProps = defaultProps;
export default Edit;
