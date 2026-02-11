import Logo from "../Logo";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import { Suspense } from "react";
import Nav from "../Nav";
import NavContextProvider from "../../contexts/nav-context";

export default function Header() {
  return (
    <header className="relative max-[700px]:fixed max-[700px]:z-10 max-[700px]:border max-[700px]:border-[var(--clr-neutral-300)] max-[700px]:bg-[var(--clr-neutral-000)]">
      <div className="grid grid-cols-3 items-center gap-8 border-b border-[var(--clr-neutral-300)] py-6 max-[700px]:grid-cols-[max-content_1fr_2rem] max-[700px]:gap-4 max-[700px]:border-none max-[700px]:py-4">
        <Logo />
        <Suspense fallback={<div>Loading search parameters...</div>}>
          <SearchBar />
        </Suspense>
        <NavContextProvider>
          <Nav />
        </NavContextProvider>
        <Categories />
      </div>
    </header>
  );
}
