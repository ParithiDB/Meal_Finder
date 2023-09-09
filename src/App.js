import './App.css';
import React, { useState, useEffect } from 'react';
import SearchResult from './Components/ResultCard';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';


function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!searchQuery) return;

    // Make the API request and update the state with the results
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data here
        // For example, you can update the state with the results
        setSearchResults(data.meals || []); // If data.meals is undefined, set an empty array
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [searchQuery]);

  const handleSearch = (query) => {
    // Check if the query is empty
    if (!query) {
      alert('Enter a food name to search');
      return;
    }

    setSearchQuery(query);
  };


  return (
    <div className="App">
      <div className='main-content'>
      <h1 className='mt-2 meal'>Meal Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <SearchResult results={searchResults} />
      </div>
    </div>
      </div>
    <Footer />
    </div>
    
  );
}

export default App;
