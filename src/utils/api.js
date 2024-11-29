
export const fetchSearchResults = async (query, page = 1) => {
  try {
    const response = await fetch(
      `https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${query}&resultsFormat=native&page=${page}`
    );
    const data = await response.json();
    return {
      products: data.results,
      totalPages: data.pagination.totalPages,
    };
  } catch (error) {
    console.error("Error fetching search results:", error);
    return { products: [], totalPages: 0 };
  }
};
