import { Document, Schema, model } from "mongoose";

interface FilmModel extends Document {
    title: string
    description: string
    image_url: string
    trailer_url: string
}

const FilmSchema: Schema = new Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    image_url: { type: String, require: true },
    trailer_url: { type: String, require: true },
})

const Film = model<FilmModel>('Film', FilmSchema);

export default Film