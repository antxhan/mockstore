import Header from "./Header/Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <footer>footer</footer>
    </>
  );
}
