import Layout from "../components/Layout/Layout"; // Import Layout component
import Faq from "../components/Faq/Faq"; // Import the Faq component
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // Import serverSideTranslations

export default function FAQ() {
  return (
    <Layout>
      <main>
        <Faq /> {/* Use the Faq component */}
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
