import Link from "next/link";

export default function LinkList({
  title,
  items,
}: {
  title: string;
  items: { path: string; title: string }[];
}) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.title}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
