import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);

app.listen(3000, () => {
    mongoose.connect('mongodb+srv://admin:admin@api-teste.hj5yyiq.mongodb.net/?retryWrites=true&w=majority&appName=api-teste')
    console.log("RODANDOO")
});