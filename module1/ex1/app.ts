import express from "express";

import usersRouter from "./routes/users";
import pizzaRouter from "./routes/pizzas";
import moviesRouter from "./routes/movies";
import textsRouter from "./routes/texts";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/pizzas", pizzaRouter);
app.use("/movies", moviesRouter);
app.use("/texts", textsRouter); // movies use the same router as pizzas

export default app;