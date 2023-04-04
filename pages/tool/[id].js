import { useRouter } from "next/router";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";

export default function ToolDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch tool details using the 'id'
  // Replace the placeholders below with actual data

  return (
    <>
      <Header />
      <main>
        <section>
          {/* Tool information */}
          <h1>Tool Name</h1>
          <p>Description</p>
          {/* Add more details as needed */}
        </section>
        <section>{/* User reviews and ratings */}</section>
        <section>{/* Comparison with similar tools */}</section>
      </main>
      <Footer />
    </>
  );
}
