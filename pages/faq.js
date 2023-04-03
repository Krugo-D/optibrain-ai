import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function FAQ() {
  // Fetch FAQ data
  // Replace the placeholders below with actual data

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Frequently Asked Questions</h1>
          <div>
            <h2>Question 1</h2>
            <p>Answer 1</p>
          </div>
          <div>
            <h2>Question 2</h2>
            <p>Answer 2</p>
          </div>
          {/* Add more FAQ items */}
        </section>
      </main>
      <Footer />
    </>
  );
}
