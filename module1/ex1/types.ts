interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface Movie {
  id: number;
  title: string;
  content: string;
}
interface Text {
  id: number;
  level: number;
  content: string;
}


interface PizzaToUpdate {
  title?: string;
  content?: string;
}

interface MovieToUpdate {
  title?: string;
  content?: string;
}
interface TextToUpdate {
  level?: number;
  content?: string;
}

type NewPizza = Omit<Pizza, "id">;
type NewMovie = Omit<Movie, "id">;
type NewText = Omit<Text, "id">;


export type { Pizza, Movie, NewPizza, Text, NewMovie, NewText, PizzaToUpdate, MovieToUpdate, TextToUpdate };