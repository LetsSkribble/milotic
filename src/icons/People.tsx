import React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../types/IconProps";
import { Icon } from "../../types/Icon";
const defaultProps: IconProps = {
  size: 24
};

const People: Icon = ({ size, ...props }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <Path d="M1 18c0-2.25 3-2.25 4.5-3.75.75-.75-1.5-.75-1.5-4.5C4 7.25 5 6 7 6s3 1.25 3 3.75c0 3.75-2.25 3.75-1.5 4.5C10 15.75 13 15.75 13 18m-.208-2.273c.492-.179.895-.344 1.21-.495.55-.265 1.082-.566 1.498-.982.75-.75-1.5-.75-1.5-4.5C14 7.25 15 6 17 6s3 1.25 3 3.75c0 3.75-2.25 3.75-1.5 4.5C20 15.75 23 15.75 23 18M12 16c.366-.124.63-.215.792-.273" />
  </Svg>
);

People.defaultProps = defaultProps;
export default People;
