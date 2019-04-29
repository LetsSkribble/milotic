import { IconProps } from "./IconProps";

interface Icon {
  ({ size, ...props }: IconProps): JSX.Element;
  defaultProps: IconProps;
}
