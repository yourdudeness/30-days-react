import { useRef, useState } from "react";
import { searchMovies, type Movie } from "./api";
import MovieCard from "./movie-card";

const MoviesApp = () => {
  const movieinput = useRef<HTMLInputElement>(null);
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const input = movieinput.current;

    if (!input) return;

    const text = input.value.trim();

    if (!text) return;

    const results = await searchMovies(text);

    setMovies(results.results);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            name="movieName"
            id="movieName"
            ref={movieinput}
            style={{ color: "white" }}
          />
          <button type="submit" style={{ color: "white" }}>
            search
          </button>
        </div>
      </form>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,1fr)",
          marginTop: "40px",
        }}
      >
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
};

export default MoviesApp;
