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

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.meals || []); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [searchQuery]);

  const handleSearch = (query) => {
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
