import React from "react";
import "./Row.css";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface RowProps {
  title: string;
  movies: Movie[];
  isLargeRow?: boolean;
}

const Row: React.FC<RowProps> = ({ title, movies, isLargeRow = false }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-poster-large"}`}
          >
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="poster-image"
            />
            <div className="poster-info">
              <h3>{movie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
