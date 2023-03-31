// pages/index.js
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToolCard from "../components/ToolCard";
import Testimonial from "../components/Testimonial";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import tools from "../data/tools.json";

export default function Home() {
  const [filters, setFilters] = useState({
    category: "",
    codingSkill: "",
    cost: "",
    language: "",
  });

  const filteredTools = tools.filter((tool) => {
    const filterCategory = filters.category
      ? tool.category === filters.category
      : true;
    const filterCodingSkill = filters.codingSkill
      ? tool.codingSkillRequired === (filters.codingSkill === "Yes")
      : true;
    const filterCost = filters.cost ? tool.cost === filters.cost : true;
    const filterLanguage = filters.language
      ? tool.languages.includes(filters.language)
      : true;

    return filterCategory && filterCodingSkill && filterCost && filterLanguage;
  });

  return (
    <>
      <Header />
      <main>
        <section>{/* Hero section */}</section>
        <section>{/* Brief introduction */}</section>
        <SearchBar />
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
