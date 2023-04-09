// components/layout.js

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
