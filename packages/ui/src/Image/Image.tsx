import ImageComponentFromNext from "next/image";

import { ImageProps } from "./types";

export const Image = ({ ...rest }: ImageProps) => {
  return <ImageComponentFromNext {...rest} />;
};
