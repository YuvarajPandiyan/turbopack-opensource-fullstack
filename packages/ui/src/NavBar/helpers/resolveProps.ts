import { GetItemPropsForType, NavItemTypes } from "../types";

export const getItemPropsForType = <T extends keyof GetItemPropsForType>(
  type: T,
  resProps: GetItemPropsForType[T] = {} as GetItemPropsForType[T]
): GetItemPropsForType[T] => {
  switch (type) {
    case NavItemTypes.link:
      return { ...resProps, color: "foreground" } as GetItemPropsForType[T];
    case NavItemTypes.button:
      return {
        ...resProps,
        color: "primary",
        variant: "flat",
      } as GetItemPropsForType[T];
    default:
      return resProps;
  }
};
