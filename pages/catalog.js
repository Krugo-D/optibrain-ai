import Header from "../components/Header";
import Footer from "../components/Footer";
import ToolCard from "../components/ToolCard";
import SearchBar from "../components/SearchBar";

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <SearchBar />
        <section>
          {/* AI Tools list */}
          <ToolCard />
        </section>
      </main>
      <Footer />
    </>
  );
}
