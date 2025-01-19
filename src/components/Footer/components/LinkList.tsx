import Link from "next/link";

export default function LinkList({
  title,
  items,
  openInNewTab,
}: {
  title: string;
  items: { path: string; title: string }[];
  openInNewTab?: boolean;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.title}>
              <Link href={item.path} target={openInNewTab ? "_blank" : "_self"}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
