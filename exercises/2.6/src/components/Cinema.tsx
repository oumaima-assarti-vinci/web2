import { type Movie } from "../types";

interface CinemProps {
  name: string;
  movies: Movie[];
}

const Cinema = (props: CinemProps) => (
  <div>
    <h2>{props.name}</h2>
    <ul>
      {props.movies.map((movie) => (
        <li key={movie.title}>
          <strong>{movie.title}</strong> - Réalisateur : {movie.director}
        </li>
      ))}
    </ul>
  </div>
);

export default Cinema;