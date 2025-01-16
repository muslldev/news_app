import { useState, useEffect } from "react";

export const useNews = category => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          setError(data.message || "Unknown error");
        }
      } catch (error) {
        setError("Error fetching news: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);
  return { articles, loading, error };
};
