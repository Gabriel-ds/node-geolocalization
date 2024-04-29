import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { UserModel } from './models/user';

const app = express();

const STATUS = {
    OK: 200,
    CREATED: 201,
    UPDATED: 201,
    NOT_FOUND: 400,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 500,
    DEFAULT_ERROR: 418,
};

app.use(express.json());

app.get('/users', async (req: Request, res: Response) => {
    const { page, limit } = req.query;

    try {
        const [users, total] = await Promise.all([
            UserModel.find().lean(),
            UserModel.countDocuments(),
        ]);

        res.json({
            rows: users,
            page,
            limit,
            total,
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: 'Error fetching users' });
    }
});

app.get('/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findOne({ _id: id }).lean();

        if (!user) {
            return res.status(STATUS.NOT_FOUND).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: 'Error fetching user' });
    }
});

app.put('/users/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const user = await UserModel.findOneAndUpdate(
            { _id: id },
            { name },
            { new: true }
        );

        if (!user) {
            return res.status(STATUS.NOT_FOUND).json({ message: 'User not found' });
        }

        res.sendStatus(STATUS.UPDATED);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(STATUS.INTERNAL_SERVER_ERROR).json({ error: 'Error updating user' });
    }
});

// Connect to MongoDB
app.listen(3000, () => {
    mongoose.connect('mongodb+srv://admin:admin@api-teste.hj5yyiq.mongodb.net/?retryWrites=true&w=majority&appName=api-teste')
    console.log("RODANDOO")
});