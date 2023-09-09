import React from 'react';

function SearchResult({ results }) {
  if (results.length === 0) {
    return (
    <div className='w-100'>
        <h2 className='text-center w-100 text-danger'>No food found</h2>
    </div>
  )}

  return (
    <>
        {results.map((result) => (
          <div className="col mb-4" key={result.idMeal}>
            <div className="card">
              <img
                src={result.strMealThumb}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{result.strMeal}</h5>
                <a
                  href={result.strYoutube}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Watch YouTube
                </a>
              </div>
            </div>
          </div>
        ))}
        </>
     
  );
}

export default SearchResult;