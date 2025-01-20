import ElectronicsIcon from "./ElectronicsIcon";
import JeweleryIcon from "./JeweleryIcon";
import MensClothingIcon from "./MensClothingIcon";
import WomensClothingIcon from "./WomensClothingIcon";

export const categoryIcon = (category: string) => {
  switch (category) {
    case "mensClothing":
      return <MensClothingIcon />;
    case "womensClothing":
      return <WomensClothingIcon />;
    case "jewelery":
      return <JeweleryIcon />;
    case "electronics":
      return <ElectronicsIcon />;
    default:
      return null;
  }
};
