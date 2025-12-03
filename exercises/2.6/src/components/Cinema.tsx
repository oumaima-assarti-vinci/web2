import { type Movie } from "../types";

interface CinemProps {
  name: string;
  movies: Movie[];
}

const Cinema = ({ name, movies }: CinemProps) => (
  <div>
    <h2>{name}</h2>
    <ul>
      {movies.map((movie) => (
        <li key={movie.title}>
          <strong>{movie.title}</strong> - Réalisateur : {movie.director}
        </li>
      ))}
    </ul>
  </div>
);

export default Cinema;