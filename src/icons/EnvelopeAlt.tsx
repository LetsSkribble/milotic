import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const EnvelopeAlt: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M2 5h20v14H2z" />
    <Path d="M2 5l10 9 10-9" />
  </Svg>
);

EnvelopeAlt.defaultProps = defaultProps;
export default EnvelopeAlt;
