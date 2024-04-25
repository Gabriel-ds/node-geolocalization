import express from 'express';
import mongoose from 'mongoose';
import FilmController from './controllers/filmController';

const app = express();
app.use(express.json())

const filmController = new FilmController();

app.get("/", filmController.getAllFilms.bind(filmController));
app.delete("/:id", filmController.deleteFilm.bind(filmController));
app.put("/:id", filmController.updateFilm.bind(filmController));
app.post("/", filmController.createFilm.bind(filmController));

app.listen(3000, () => {
    mongoose.connect('mongodb+srv://admin:admin@api-teste.hj5yyiq.mongodb.net/?retryWrites=true&w=majority&appName=api-teste')
    console.log("RODANDOO")
});