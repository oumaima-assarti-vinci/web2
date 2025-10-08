/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import path from "node:path";
import { Pizza , Movie, NewMovie } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/movies.json");

const defaultMovies: Movie[] = [
  {
    id: 1,
    title: "Karaté Kid",
    content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates",
  },
  {
    id: 2,
    title: "Taken ",
    content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons",
  },
  {
    id: 3,
    title: "Batman",
    content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",
  },
  {
    id: 4,
    title: "Inception",
    content: "Gruyère, Mozarella, Lardons, Tomates",
  },
  {
    id: 5,
    title: "Black Swan",
    content: "Tomates, Mozarella, Chorizo piquant, Jalapenos",
  },
];

function readAllMovies(order: string | undefined): Movie[] {
  const orderByTitle = order && order.includes("title") ? order : undefined;

  let orderedMenu: Movie[] = [];
  const movies = parse(jsonDbPath, defaultMovies);
  if (orderByTitle)
    orderedMenu = [...movies].sort((a, b) => a.title.localeCompare(b.title));

  if (orderByTitle === "-title") orderedMenu = orderedMenu.reverse();

  return orderedMenu.length === 0 ? movies : orderedMenu;
}

function readMovieById(id: number): Pizza | undefined {
  const movies = parse(jsonDbPath, defaultMovies);
  return movies.find((movie) => movie.id === id);
}

function createMovie(newMovie: NewMovie): Movie {
  const movies = parse(jsonDbPath, defaultMovies);
  const lastId = movies[movies.length - 1].id;
  const movie: Movie = { id: lastId + 1, ...newMovie };
  const updatedMovies = [...movies, movie];
  serialize(jsonDbPath, updatedMovies);
  return movie;
}

function deleteMovie(id: number): Pizza | undefined {
  const pizzas = parse(jsonDbPath, defaultMovies);
  const index = pizzas.findIndex((pizza) => pizza.id === id);
  if (index === -1) return undefined;

  const deletedElements = pizzas.splice(index, 1);
  serialize(jsonDbPath, pizzas);
  return deletedElements[0];
}

function updateMovie(
  id: number,
  updatedMovie: Partial<NewMovie>
): Movie | undefined {
  const movies = parse(jsonDbPath, defaultMovies);
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) return undefined;

  if (updatedMovie.title !== undefined) {
    movie.title = updatedMovie.title;
  }
  if (updatedMovie.content !== undefined) {
    movie.content = updatedMovie.content;
  }

  serialize(jsonDbPath, movies);
  return movie;
}

export { readAllMovies, updateMovie, createMovie, deleteMovie, readMovieById };