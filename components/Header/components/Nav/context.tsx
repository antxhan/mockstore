"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type NavContext = {
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean | undefined;
};

export const NavContext = createContext<NavContext | null>(null);

export default function NavContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    if (isMobile === undefined) {
      setIsMobile(window.innerWidth < 700);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <NavContext.Provider value={{ isHidden, setIsHidden, isMobile }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
}
