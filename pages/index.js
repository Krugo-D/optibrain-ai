import React, { useState, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import DynamicToolCard from "../components/ToolCard/DynamicToolCard";
import Testimonial from "../components/Testimonial/Testimonial";
import Filter from "../components/Filter/Filter";
import tools from "../data/tools.json";

export default function Home() {
  const [filters, setFilters] = useState({
    category: "",
    codingSkill: "",
    cost: "",
    language: "English",
  });

  const filteredTools = tools.filter((tool) => {
    const filterCategory =
      filters.category === "" || tool.categories.includes(filters.category);
    const filterCodingSkill =
      filters.codingSkill === "" ||
      tool.codingSkillRequired.toString().toLowerCase() ===
        filters.codingSkill.toLowerCase();
    const filterCost = filters.cost === "" || tool.cost === filters.cost;
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
