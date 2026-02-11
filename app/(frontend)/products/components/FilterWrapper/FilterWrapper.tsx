"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Button/Button";

export default function FilterWrapper({
  title,
  indicator,
  children,
}: {
  title: string;
  indicator?: string | null;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex flex-col gap-2 rounded-xl bg-[var(--clr-neutral-000)] px-3 py-2">
      <header
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <h3>{title}</h3>
          <span
            className="flex h-5 items-center justify-center rounded-lg bg-[var(--clr-primary)] px-2 text-[var(--fs-xsmall)] font-bold data-[visible=false]:hidden"
            data-visible={indicator && !isOpen ? true : false}
          >
            {indicator}
          </span>
        </div>
        <Button
          icon={
            <Image
              src="/icons/chevron-up.svg"
              alt="arrow icon"
              width={24}
              height={24}
            />
          }
          ariaLabel={isOpen ? `Hide` : `Show`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className={!isOpen ? "rotate-180" : ""}
        />
      </header>
      <main aria-hidden={!isOpen} className="flex flex-col gap-2 aria-hidden:hidden">
        {children}
      </main>
    </div>
  );
}
