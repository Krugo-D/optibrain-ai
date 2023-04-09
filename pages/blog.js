import Layout from "../components/Layout/Layout"; // Import Layout component
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // Import serverSideTranslations

export default function Blog() {
  // Fetch blog posts data
  // Replace the placeholders below with actual data

  return (
    <Layout>
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
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])), // Add your translation namespaces
    },
  };
}
