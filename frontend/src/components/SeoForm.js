import React, { useState } from "react";
import { analyzeArticle } from "../api";

const SeoForm = ({ setResults }) => {
  const [article, setArticle] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await analyzeArticle(article, keyword);
    setResults(data);
  };

  const handleClear = () => {
    setArticle("");
    setKeyword("");
    setResults(null);
  };

  return (
    <form onSubmit={handleSubmit} className="seo-form">
      <textarea
        placeholder="Paste your article here..."
        value={article}
        onChange={(e) => setArticle(e.target.value)}
        rows={10}
        required
      />
      <input
        type="text"
        placeholder="Target keyword(s)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <div className="form-buttons">
        <button type="submit">Analyze SEO</button>
        <button type="button" onClick={handleClear} className="clear-btn">
          Clear
        </button>
      </div>
    </form>
  );
};

export default SeoForm;
