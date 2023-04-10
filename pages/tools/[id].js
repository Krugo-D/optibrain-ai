// pages/tools/[id].js
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../components/Layout/Layout";
import Tool from "../../components/Tool/Tool";
import Sidebar from "../../components/Sidebar/Sidebar";
import tools from "../../data/tools.json";

const ToolDetails = ({ tool }) => {
  return (
    <Layout>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Tool tool={tool} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticPaths({ locales }) {
  const paths = tools.map((tool) => {
    return locales.map((locale) => ({
      params: { id: tool.id.toString() },
      locale,
    }));
  });

  return {
    paths: paths.flat(),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const tool = tools.find((tool) => tool.id.toString() === params.id);

  if (!tool) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "descriptions"])),
      tool,
    },
  };
}

export default ToolDetails;
