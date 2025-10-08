/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import path from "node:path";
import { NewText, Text } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/movies.json");

const defaultText: Text[] = [
  {
    id: 1,
    level: 28,
    content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates",
  },
  {
    id: 2,
    level: 13,
    content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons",
  },
  {
    id: 3,
    level: 122,
    content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",
  },
  {
    id: 4,
    level: 156,
    content: "Gruyère, Mozarella, Lardons, Tomates",
  },
  {
    id: 5,
    level: 98,
    content: "Tomates, Mozarella, Chorizo piquant, Jalapenos",
  },
];

function readAllTexts(order: string | undefined): Text[] {
  const orderByTitle = order && order.includes("title") ? order : undefined;

  let orderedMenu: Text[] = [];
  const texts = parse(jsonDbPath, defaultText);
  if (orderByTitle)
    orderedMenu = [...texts].sort((a, b) => a.content.localeCompare(b.content));

  if (orderByTitle === "-title") orderedMenu = orderedMenu.reverse();

  return orderedMenu.length === 0 ? texts : orderedMenu;
}

function readTextById(id: number): Text | undefined {
  const texts = parse(jsonDbPath, defaultText);
  return texts.find((text) => text.id === id);
}

function createText(newText: NewText): Text {
  const texts = parse(jsonDbPath, defaultText);
  const lastId = texts[texts.length - 1].id;
  const text: Text = { id: lastId + 1, ...newText };
  const updatedTexts = [...texts, text];
  serialize(jsonDbPath, updatedTexts);
  return text;
}

function deleteText(id: number): Text | undefined {
  const texts = parse(jsonDbPath, defaultText);
  const index = texts.findIndex((text) => text.id === id);
  if (index === -1) return undefined;

  const deletedElements = texts.splice(index, 1);
  serialize(jsonDbPath, texts);
  return deletedElements[0];
}

function updateText(
  id: number,
  updatedText: Partial<NewText>
): Text | undefined {
  const texts = parse(jsonDbPath, defaultText);
  const text = texts.find((text) => text.id === id);
  if (!text) return undefined;

  if (updatedText.level !== undefined) {
    text.level = updatedText.level;
  }
  if (updatedText.content !== undefined) {
    text.content = updatedText.content;
  }

  serialize(jsonDbPath, texts);
  return text;
}

export { readAllTexts, updateText, createText, deleteText, readTextById };