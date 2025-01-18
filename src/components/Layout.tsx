import Footer from "./Footer/Footer";
import Header from "./Header/Header";

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
