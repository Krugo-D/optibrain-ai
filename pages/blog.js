import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Blog() {
  // Fetch blog posts data
  // Replace the placeholders below with actual data

  return (
    <>
      <Header />
      <main>
        <section>
          <h1>Blog</h1>
          {/* List of blog articles */}
          <article>
            <h2>Blog Post Title</h2>
            <p>Blog Post Excerpt</p>
            <a href="/blog/post-slug">Read More</a>
          </article>
          {/* Add more blog articles */}
        </section>
      </main>
      <Footer />
    </>
  );
}
