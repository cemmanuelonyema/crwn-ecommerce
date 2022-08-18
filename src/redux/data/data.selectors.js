import { createSelector } from "reselect";

const selectProductMenus = (state) => state.productMenu;

export const selectMenus = createSelector(
  [selectProductMenus],
  (productMenu) => productMenu.menus
);
