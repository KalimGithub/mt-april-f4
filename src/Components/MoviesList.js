import React from 'react'

const MoviesList = ({movies}) => {
  // console.log(movies);
  return (
    <div className="movies-list">
      <div className="movies">
        <table>
          <thead>
            <tr>
              <th className="title-row">Title</th>
              <th className="genre-row">Genre</th>
              <th className="year-row">Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => {
              return (
                <tr key={index}>
                  <td className="title-row">{movie.title}</td>
                  <td className="genre-row">{movie.genre}</td>
                  <td className="year-row">{movie.year}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MoviesList