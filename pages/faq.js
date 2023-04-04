import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Faq from "../components/Faq/Faq"; // Import the Faq component

export default function FAQ() {
  return (
    <>
      <Header />
      <main>
        <Faq /> {/* Use the Faq component */}
      </main>
      <Footer />
    </>
  );
}
