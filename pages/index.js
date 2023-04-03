import { useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import ToolCard from "../components/ToolCard/ToolCard";
import Testimonial from "../components/Testimonial/Testimonial";
import Filter from "../components/Filter/Filter";
import tools from "../data/tools.json";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation("common");

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

  return (
    <>
      <Header />
      <main>
        <section>
          {/* import a hero component */}
          <Hero />
        </section>
        <section>{/* Brief introduction */}</section>
        <section className="main-content">
          <aside className="sidebar">
            <Filter filters={filters} setFilters={setFilters} />
          </aside>
          <section className="tool-cards">
            {/* Featured AI tools */}
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </section>
        </section>
        <section>
          {/* Testimonials */}
          <Testimonial />
        </section>
      </main>
      <Footer />
    </>
  );
}
