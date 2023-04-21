import Layout from "../components/Layout/Layout"; // Import Layout component
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // Import serverSideTranslations

export default function Blog() {
  // Fetch blog posts data
  // Replace the placeholders below with actual data

  return (
    <Layout>
      <main>
        <section>under construction..</section>
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
