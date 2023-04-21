import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import styles from "./Overview.module.css";

const Overview = ({ tool }) => {
  return (
    <Container fluid className={styles.Overview}>
      <Container>
        <Row className={styles.toolRow}>
          <Col xs={12} sm={4} md={2} className={styles.logoCol}>
            <img
              src={tool.logo}
              alt={`${tool.name} logo`}
              className={styles.toolLogo}
            />
          </Col>
          <Col xs={12} sm={8} md={10} className={styles.infoCol}>
            <Row>
              <Col xs={12} sm={6} md={3} className={styles.nameCol}>
                <h3>{tool.name}</h3>
              </Col>
              <Col xs={12} sm={6} md={3} className={styles.categoriesCol}>
                <h4>Categories</h4>
                {tool.categories.map((category, index) => (
                  <Badge key={index} pill bg="primary" className="mx-1">
                    {category}
                  </Badge>
                ))}
              </Col>
              <Col xs={12} sm={6} md={2} className={styles.costCol}>
                <h4>Cost</h4>
                <p>{tool.cost}</p>
              </Col>
              <Col xs={12} sm={6} md={4} className={styles.languagesCol}>
                <h4>Languages</h4>
                {tool.languages.map((language, index) => (
                  <Badge key={index} pill bg="secondary" className="mx-1">
                    {language}
                  </Badge>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Overview;
