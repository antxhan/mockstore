import Image from "next/image";
import Link from "next/link";
import LinkList from "./components/LinkList";

export default function Footer() {
  const categories = [
    {
      path: "/products?category=men's clothing",
      title: "Men's Clothing",
    },
    {
      path: "/products?category=women's clothing",
      title: "Women's Clothing",
    },
    {
      path: "/products?category=jewelery",
      title: "Jewelery",
    },
    {
      path: "/products?category=electronics",
      title: "Electronics",
    },
  ];
  const credits = [
    {
      path: "https://github.com/antxhan",
      title: "Made by Anton Hansson",
    },
    {
      path: "https://github.com/antxhan/mockstore",
      title: "GitHub Repo",
    },
    {
      path: "https://dribbble.com/shots/22402874-E-commerce-Website",
      title: "Design Inspo 1",
    },
    {
      path: "https://dribbble.com/shots/25001090-Stella-Ecommerce-Website",
      title: "Design Inspo 2",
    },
    {
      path: "https://unsplash.com/photos/womens-black-leather-jacket-t3836YmTfw8",
      title: "Hero Photo",
    },
  ];
  return (
    <footer>
      <div className="wrapper">
        <div className="logo">MS</div>
        <LinkList title="Categories" items={categories} />
        <LinkList title="Credits" items={credits} openInNewTab={true} />
        <div>
          <h2>Contacts</h2>
          <address>
            <Link href="tel:+00 000 000 0000">+00 000 000 0000</Link>
            <ul>
              <li>
                <Link href="https://www.facebook.com/" target="_blank">
                  <Image
                    src="icons/brand-facebook.svg"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/" target="_blank">
                  <Image
                    src="icons/brand-instagram.svg"
                    alt="Instagram"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://x.com/" target="_blank">
                  <Image
                    src="icons/brand-x.svg"
                    alt="X"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
              <li>
                <Link href="https://youtube.com/" target="_blank">
                  <Image
                    src="icons/brand-youtube.svg"
                    alt="YouTube"
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            </ul>
          </address>
        </div>
      </div>
    </footer>
  );
}
