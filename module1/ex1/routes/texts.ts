/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Router } from "express";

import { readAllTexts, createText, deleteText, updateText } from "../services/texts";
import { readTextById } from "../services/texts";
import { NewText, TextToUpdate } from "../types";




const router = Router();




/* Read all the pizzas from the menu
   GET /pizzas?order=title : ascending order by title
   GET /pizzas?order=-title : descending order by title
*/
router.get("/", (req, res) => {
  if (req.query.order && typeof req.query.order !== "string") {
    return res.sendStatus(400);
  }

  const texts = readAllTexts(req.query.order);
  return res.json(texts);
});

// Read the pizza identified by an id in the menu
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const text = readTextById(id);
  if (!text) return res.sendStatus(404);
  return res.json(text);
});

// Create a pizza to be added to the menu.
router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("level" in body) ||
    !("content" in body) ||
    typeof body.level !== "number" ||
    typeof body.content !== "string" ||
    !body.level ||
    !body.content.trim()
  ) {
    return res.sendStatus(400);
  }

  const {content, level } = body as NewText;

  const addedText = createText({ level, content });

  return res.json(addedText);
});


// Delete a pizza from the menu based on its id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const deletedText = deleteText(id);
  if (!deletedText) return res.sendStatus(404);

  return res.json(deletedText);
});

// Update a pizza based on its id and new values for its parameters
router.patch("/:id", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    ("level" in body &&
      (typeof body.level !== "number" || !body.level)) ||
    ("content" in body &&
      (typeof body.content !== "string" || !body.content.trim()))
  ) {
    return res.sendStatus(400);
  }

  const textToUpdate: TextToUpdate = body;

  const id = Number(req.params.id);
  const updatedText = updateText(id, textToUpdate);
  if (!updatedText) return res.sendStatus(404);

  return res.json(updatedText);
});

export default router;