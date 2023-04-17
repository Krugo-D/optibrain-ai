// index.js
import React, { useState, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import DynamicToolCard from "../components/ToolCard/DynamicToolCard";
import Testimonial from "../components/Testimonial/Testimonial";
import Filter from "../components/Filter/Filter";
import tools from "../data/tools.json";
import ActiveFilters from "../components/Filter/ActiveFilters/ActiveFilters";

export default function Home() {
  const [filters, setFilters] = useState({
    category: "",
    codingSkill: "",
    cost: "",
    language: "English",
  });

  const filteredTools = tools.filter((tool) => {
    const filterCategory =
      filters.category === "" ||
      tool.categories
        .map((c) => c.toLowerCase())
        .includes(filters.category?.toLowerCase() ?? "");
    const filterCodingSkill =
      filters.codingSkill === "" ||
      tool.codingSkillRequired?.toLowerCase() ===
        (filters.codingSkill?.toLowerCase() ?? "");
    const filterCost =
      filters.cost === "" ||
      tool.cost?.toLowerCase() === (filters.cost?.toLowerCase() ?? "");
    const filterLanguage =
      filters.language === "" || tool.languages.includes(filters.language);

    return filterCategory && filterCodingSkill && filterCost && filterLanguage;
  });

  const contentRef = useRef(null);

  return (
    <Layout>
      <main>
        <section>
          <Hero contentRef={contentRef} />
        </section>
        <div className="content-container" ref={contentRef}>
          <section>
            <Filter filters={filters} setFilters={setFilters} />
            <ActiveFilters
              filters={filters}
              handleRemoveFilter={(filterName) => {
                setFilters({
                  ...filters,
                  [filterName]: "",
                });
              }}
            />{" "}
          </section>
          <section className="main-content">
            <section className="tool-cards">
              {/* Featured AI tools */}
              {filteredTools.map((tool) => (
                <DynamicToolCard key={tool.id} tool={tool} />
              ))}
            </section>
          </section>
        </div>
        <section>
          {/* Testimonials */}
          <Testimonial />
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "descriptions"])),
    },
  };
}
