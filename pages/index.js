import React, { useState, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import ToolCard from "../components/ToolCard/ToolCard";
import Testimonial from "../components/Testimonial/Testimonial";
import Filter from "../components/Filter/Filter";
import tools from "../data/tools.json";

export default function Home() {
  const [filters, setFilters] = useState({
    category: "All",
    codingSkill: "All",
    cost: "All",
  });

  const filteredTools = tools.filter((tool) => {
    const filterCategory =
      filters.category === "All" || tool.categories.includes(filters.category);
    const filterCodingSkill =
      filters.codingSkill === "All" ||
      tool.codingSkillRequired.toString().toLowerCase() ===
        filters.codingSkill.toLowerCase();
    const filterCost = filters.cost === "All" || tool.cost === filters.cost;

    return filterCategory && filterCodingSkill && filterCost;
  });

  const contentRef = useRef(null);

  return (
    <>
      <Header />
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
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </section>
          </section>
        </div>
        <section>
          {/* Testimonials */}
          <Testimonial />
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
