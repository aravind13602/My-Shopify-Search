import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import '../components/SearchBar.css';

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchRef = useRef(null);

  const tabs = ['Apps', 'Customers', 'Orders', 'Products', 'Sales channels'];

  const handleTabSelect = async (tab) => {
    setSelectedTab(tab);
    setLoading(true);
    setError(null);
    setSearchResults([]); 
    console.log(`Fetching data for tab: ${tab}`);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const data = await response.json();
      console.log("Data fetched from API:", data);

      
      const transformedResults = data.slice(0, 5).map(post => ({
        name: post.title,
        description: post.body
      }));
      setSearchResults(transformedResults);
      console.log("Transformed results:", transformedResults);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setSelectedTab(null);
    setSearchResults([]);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-bar">
        {!isExpanded ? (
          <div className="search-placeholder" onClick={() => setIsExpanded(true)}>
            <Search className="icon" size={16} />
            <span className="placeholder-text">Search</span>
          </div>
        ) : (
          <div className="search-expanded">
            <div className="search-input-container">
              <Search className="icon" size={20} />
              {selectedTab && (
                <div className="selected-tab">
                  <span className="tab-text">{selectedTab}</span>
                  <X className="close-icon" size={14} onClick={clearResults} />
                </div>
              )}
              <input
                type="text"
                placeholder={selectedTab ? `Search for ${selectedTab.toLowerCase()}` : "Search"}
                className="search-input"
              />
            </div>
            {!selectedTab && (
              <div className="tabs-container">
                {tabs.map((tab) => (
                  <button key={tab} onClick={() => handleTabSelect(tab)} className="tab-button">
                    {tab}
                  </button>
                ))}
              </div>
            )}

            <div className="results-container">
              {loading && <p>Loading...</p>}
              {error && <p className="error-text">{error}</p>}
              {!loading && searchResults.length > 0 && (
                <div>
                  {searchResults.map((result, index) => (
                    <div key={index} className="result-item">
                      <div className="result-name">{result.name}</div>
                      <p className="result-description">{result.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
