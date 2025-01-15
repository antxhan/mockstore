import { mensClothingIcon } from "./mensClothing.js";
import { womensClothingIcon } from "./womensClothing.js";
import { jeweleryIcon } from "./jeweleryIcon.js";
import { electronicsIcon } from "./electronicsIcon.js";

export const categoryIcon = (category) => {
  switch (category) {
    case "jewelery":
      return jeweleryIcon;
    case "mensClothing":
      return mensClothingIcon;
    case "womensClothing":
      return womensClothingIcon;
    case "electronics":
      return electronicsIcon;
    default:
      return "";
  }
};
