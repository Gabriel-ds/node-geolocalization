import express from 'express';
import mongoose, { Schema } from 'mongoose';

const app = express();
app.use(express.json())

const FilmSchema: Schema = new Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    image_url: { type: String, require: true },
    trailer_url: { type: String, require: true },
})

const Film = mongoose.model('Film', FilmSchema);

app.get("/", async (req, res) => {
    const films = await Film.find()
    res.send(films)
})

app.delete("/:id", async (req, res) => {
    const film = await Film.findByIdAndDelete(req.params.id)
    res.send(film)
})

app.put("/:id", async (req, res) => {
    const film = await Film.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
    })
    res.send(film)
})

app.post("/", async (req, res) => {
    const film = new Film({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url,
    })
    await film.save()
    res.send(film)
})

app.listen(3000, () => {
    mongoose.connect('mongodb+srv://admin:admin@api-teste.hj5yyiq.mongodb.net/?retryWrites=true&w=majority&appName=api-teste')
    console.log("RODANDOO")
});