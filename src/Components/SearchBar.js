import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div class="input-group mb-3 p-5">
  <input 
  type="text" 
  class="form-control" 
  placeholder="Enter the Recipe" 
  aria-label="Enter the Recipe" 
  aria-describedby="button-addon2"
  value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          />
     
  <button class="btn btn-success" type="submit" id="button-addon2">Search Recipes</button>
</div>
      </form>
    </div>
  );
}

export default SearchBar;
