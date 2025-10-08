import { Router } from "express";

import { NewMovie, MovieToUpdate } from "../types";
import { readAllMovies, readMovieById, createMovie, deleteMovie, updateMovie } from "../services/movies";




const router = Router();




/* Read all the pizzas from the menu
   GET /pizzas?order=title : ascending order by title
   GET /pizzas?order=-title : descending order by title
*/
router.get("/", (req, res) => {
  if (req.query.order && typeof req.query.order !== "string") {
    return res.sendStatus(400);
  }

  const movies = readAllMovies(req.query.order);
  return res.json(movies);
});

// Read the pizza identified by an id in the menu
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = readMovieById(id);
  if (!movie) return res.sendStatus(404);
  return res.json(movie);
});

// Create a pizza to be added to the menu.
router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("content" in body) ||
    typeof body.title !== "string" ||
    typeof body.content !== "string" ||
    !body.title.trim() ||
    !body.content.trim()
  ) {
    return res.sendStatus(400);
  }

  const { title, content } = body as NewMovie;

  const addedMovie = createMovie({ title, content });

  return res.json(addedMovie);
});


// Delete a pizza from the menu based on its id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deletedMovie = deleteMovie(id);
  if (!deletedMovie) return res.sendStatus(404);

  return res.json(deletedMovie);
});

// Update a pizza based on its id and new values for its parameters
router.patch("/:id", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("content" in body &&
      (typeof body.content !== "string" || !body.content.trim()))
  ) {
    return res.sendStatus(400);
  }

  const movieToUpdate: MovieToUpdate = body;

  const id = Number(req.params.id);
  const updatedMovie = updateMovie(id, movieToUpdate);
  if (!updatedMovie) return res.sendStatus(404);

  return res.json(updatedMovie);
});

export default router;