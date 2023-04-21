// pages/tools/[id].js
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import Tool from "../../components/Tool/Tool";
import Sidebar from "../../components/Sidebar/Sidebar";
import Overview from "../../components/Tool/Overview/Overview";
import tools from "../../data/tools.json";
import styles from "./tools.module.css";

const ToolDetails = ({ tool, blogPost }) => {
  console.log(`blog post console.log: ` + blogPost);

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <Overview tool={tool} />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <Tool tool={tool} blogPost={blogPost} />
          </Col>
        </Row>
      </Container>
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

  let blogPost;

  try {
    // Fetch the blog post data from Strapi using axios
    const response = await axios.get(
      `https://toolpicker-strapi-production.up.railway.app/api/tool-reviews/${params.id}`
    );
    blogPost = response.data; // Get only the data property from the Axios response
  } catch (error) {
    blogPost = {
      defaultMessage:
        "This Blog post hasn't been written yet, please check back soon! 😊",
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "descriptions"])),
      tool,
      blogPost,
    },
  };
}

export default ToolDetails;
