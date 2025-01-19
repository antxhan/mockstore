import { toCapitalize } from "@/utils/utils";
import styles from "./styles.module.css";
import Link from "next/link";
import ChevronIcon from "@/icons/ChevronIcon/ChevronIcon";
import React from "react";

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: { path: string; title: string }[];
}) {
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((path, index) => (
        <React.Fragment key={index}>
          <Link href={path.path}>{toCapitalize(path.title)}</Link>
          {index < breadcrumbs.length - 1 && <ChevronIcon />}
        </React.Fragment>
      ))}
    </div>
  );
}
