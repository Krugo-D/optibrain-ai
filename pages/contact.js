import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section>
          {/* Contact form */}
          <h1>Contact Us</h1>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>
        <section>
          {/* Contact information */}
          <h2>Reach us directly</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +1 (555) 555-5555</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
