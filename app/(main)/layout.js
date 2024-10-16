import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
