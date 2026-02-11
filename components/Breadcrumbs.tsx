import { toCapitalize } from "@/utils/utils";
import Link from "next/link";
import ChevronIcon from "@/icons/ChevronIcon/ChevronIcon";
import React from "react";

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: { path: string; title: string }[];
}) {
  return (
    <div className="flex items-center gap-2 overflow-hidden text-small font-bold text-neutral-700 [&_.skeleton]:w-40 [&_svg]:h-4 [&_svg]:w-4">
      {breadcrumbs.map((path, index) => (
        <React.Fragment key={index}>
          <Link
            href={path.path}
            className="max-w-[20ch] overflow-hidden text-ellipsis whitespace-nowrap text-inherit no-underline hover:text-neutral-900"
          >
            {toCapitalize(path.title)}
          </Link>
          {index < breadcrumbs.length - 1 && <ChevronIcon />}
        </React.Fragment>
      ))}
    </div>
  );
}
