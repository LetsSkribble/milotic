import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const Dashboard: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M2 2h20v20H2zM11 7h6m-6 5h6m-6 5h6M7 17" />
  </Svg>
);

Dashboard.defaultProps = defaultProps;
export default Dashboard;
