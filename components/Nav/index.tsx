"use client";

import NavButton from "./NavButton";
import CartIcon from "@/icons/CartIcon";
import HeartOutlineIcon from "@/icons/HeartOutlineIcon";
import { useNavContext } from "@/contexts/nav-context";
import { useDBContext } from "@/contexts/db";
import HeaderAction from "./HeaderAction";
import UserAvatar from "./UserAvatar";

export default function Nav() {
  const { isHidden, setIsHidden } = useNavContext();
  const { cart, likes } = useDBContext();

  const cartCount = Object.values(cart).reduce((acc, val) => acc + val, 0);

  const handleNavButtonClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <NavButton onClick={handleNavButtonClick} />
      <nav
        className="grid w-max grid-cols-3 place-self-end items-center gap-6 [&_img]:h-7 [&_img]:w-7 [&_svg]:h-7 [&_svg]:w-7 max-[700px]:fixed max-[700px]:top-0 max-[700px]:right-0 max-[700px]:z-10 max-[700px]:flex max-[700px]:min-h-svh max-[700px]:w-[min(50vw,14rem)] max-[700px]:translate-x-full max-[700px]:flex-col max-[700px]:items-start max-[700px]:justify-start max-[700px]:gap-4 max-[700px]:bg-neutral-100 max-[700px]:px-8 max-[700px]:pt-24 max-[700px]:shadow-[0_0_0.5rem_rgba(0,0,0,0.2)] max-[700px]:transition-transform max-[700px]:duration-200 max-[700px]:ease-in-out max-[700px]:data-[expanded=true]:translate-x-0"
        data-expanded={!isHidden}
      >
        <HeaderAction
          path="/cart"
          icon={<CartIcon />}
          title="Cart"
          count={cartCount}
        />
        <HeaderAction
          path="/likes"
          icon={<HeartOutlineIcon />}
          title="Likes"
          count={likes.length}
        />
        <HeaderAction
          path="/products"
          icon="/icons/mensClothing.svg"
          title="Products"
          className="hidden max-[700px]:flex"
        />
        <UserAvatar />
      </nav>
    </>
  );
}
