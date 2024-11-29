import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductCards from "./components/ProductCards";
import Footer from "./components/Footer";
import { fetchSearchResults } from "./utils/api";
import backgroundImage from "./assets/background.jpg";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showPagination, setShowPagination] = useState(false);



  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    const { products, totalPages } = await fetchSearchResults(searchQuery, 1);
    setProducts(products);
    setCurrentPage(1);
    setTotalPages(totalPages);
    setShowPagination(true);
  };

  const handlePageChange = async (page) => {
    const { products } = await fetchSearchResults(query, page);
    setProducts(products);
    setCurrentPage(page);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleCategoryClick = (category) => {
    setQuery(category);
    handleSearch(category);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin:"-8px",
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <Header cartCount={cartCount} onSearch={handleSearch} searchQuery={query} />

      <HeroSection onCategoryClick={handleCategoryClick} />
      <ProductCards
        products={products}
        onAddToCart={handleAddToCart}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        showPagination={showPagination}
        searchQuery={query} 
      />
      <Footer />
    </div>
  );
};

export default App;
