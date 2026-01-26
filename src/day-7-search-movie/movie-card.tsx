import type { Movie } from "./api";
import styles from "./movie-card.module.css";

type Props = {
  movie: Movie;
};
const MovieCard = ({ movie }: Props) => {
  return (
    <div style={{ border: "1px solid white", padding: "10px" }}>
      <div style={{ padding: "5px" }}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w400/${movie.poster_path}`
              : "https://placehold.co/400x600"
          }
          alt="Movie Poster"
        />
        <p>
          {new Date(movie.release_date).toLocaleDateString(undefined, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      <h5 style={{color:'lightblue'}}>
        <strong>{movie.title}</strong>
      </h5>
      <div className={styles.wrapper}>
        <p className={styles.description}>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
