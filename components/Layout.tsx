import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main>
        <div className="wrapper">{children}</div>
      </main>
      <Footer />
    </>
  );
}
