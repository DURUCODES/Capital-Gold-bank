import React, { useEffect, useState } from "react";

const Blog = () => {
  const [news, setNews] = useState([]);

  const apiKey = "cbfd0c7ddcf749778269b1f44e286b07"; // Your API key

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setNews(data.articles); // Store the articles in state
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews(); // Call the fetch function
  }, [apiKey]); // Dependency array to run only once

  return (
    <div className="text-center mt-20">
      <p className="text-[#db2777] tracking-2px mb-4">OUR BLOG</p>
      <h1 className="font-bold text-xl md:text-2xl mx-auto leading-relaxed">
        Keep Up To Date With Global Business Content <br /> From Our Trusted
        Team
      </h1>
      <div className="mt-10 flex flex-wrap justify-center">
        {news.slice(0, 8).map((article) => (
          <div
            key={article.url}
            className="m-4 w-80 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-125 transition-all duration-200"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="font-semibold text-lg">{article.title}</h2>
              <p className="text-gray-600">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
