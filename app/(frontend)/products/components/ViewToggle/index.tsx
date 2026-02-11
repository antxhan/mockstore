import Button from "@/components/Button/Button";
import GridIcon from "@/icons/GridIcon";
import ListIcon from "@/icons/ListIcon";
import React from "react";

export default function ViewToggle({
  view,
  setView,
}: {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setView(e.currentTarget.value);
  };
  return (
    <div className="flex rounded-lg bg-[var(--clr-neutral-200)] p-1">
      <Button
        ariaLabel="Grid"
        icon={<GridIcon />}
        value="grid"
        className={`rounded-lg p-2 [&_svg]:h-5 [&_svg]:w-5 ${view === "grid" ? "!bg-[var(--clr-neutral-000)] [&_svg]:text-[var(--clr-primary)]" : ""}`}
        onClick={handleChange}
      />
      <Button
        ariaLabel="List"
        icon={<ListIcon />}
        value="list"
        className={`rounded-lg p-2 [&_svg]:h-5 [&_svg]:w-5 ${view === "list" ? "!bg-[var(--clr-neutral-000)] [&_svg]:text-[var(--clr-primary)]" : ""}`}
        onClick={handleChange}
      />
    </div>
  );
}
