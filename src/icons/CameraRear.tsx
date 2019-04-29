import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const CameraRear: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M6 12l2-2 2 2M8 13a4 4 0 0 0 4 4m4-4a4 4 0 0 0-4-4M8 12v1m0-3v3m8 0v3M18 14l-2 2-2-2" />
    <Path d="M8 7l.74-1.11A2 2 0 0 1 10.404 5h3.192a2 2 0 0 1 1.664.89L16 7h5v13H3V7h5z" />
  </Svg>
);

CameraRear.defaultProps = defaultProps;
export default CameraRear;
