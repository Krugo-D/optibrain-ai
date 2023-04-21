import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";

const headingIds = {
  Introduction: "introduction",
  Review: "review",
  Rating: "rating",
  Tips: "tips",
  Pros: "pros",
  Cons: "cons",
  Cost: "cost",
  Alternatives: "alternatives",
};

const Tool = ({ blogPost }) => {
  if (blogPost.defaultMessage) {
    return (
      <Container>
        <Row className="my-4">
          <Col>
            <h4>{blogPost.defaultMessage}</h4>
          </Col>
        </Row>
      </Container>
    );
  }

  const { attributes } = blogPost.data;

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>
            <b>{attributes.Name}</b>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ReactMarkdown
            rehypePlugins={[rehypeSanitize]}
            components={{
              h2: ({ node, ...props }) => (
                <h2 id={headingIds[props.children]} {...props} />
              ),
            }}>
            {attributes.Description}
          </ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
};

export default Tool;
