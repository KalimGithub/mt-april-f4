import React from 'react'

const GenreFilter = ({genres}) => {
    // console.log(genres);
    const handleFilterBtn = (e) => {
      console.log(e.target.textContent);
    }
    return (
      <div>
        <h1>Top 15 Movies of All time</h1>
        <div className="filter-section">
          <h1>Filter by Genre</h1>
          <div className="btn-div">
            {
              genres.map((genre, index) => {
                return(
                  <button onClick={handleFilterBtn} key={index}>{genre}</button>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }

export default GenreFilter