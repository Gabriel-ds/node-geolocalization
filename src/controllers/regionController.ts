import { Request, Response } from 'express';
import { RegionModel } from '../models/regionModel';
import { STATUS } from '../utils/httpStatus';

class RegionController {
    async createRegion(req: Request, res: Response) {
        try {
            const { name, coordinates, userId } = req.body;
            console.log('======>>> ', { name, coordinates, userId })

            if (!userId) {
                return res.status(STATUS.BAD_REQUEST).json({ message: 'User not found' });
            }

            const newRegion = new RegionModel({
                name,
                coordinates,
                userId
            });

            await newRegion.save();

            res.status(201).json(newRegion);
        } catch (error: any) {
            console.error('Error creating region:', error);
            res.status(500).json({ error: 'Error creating region' });
        }
    }

    async updateRegion(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, coordinates } = req.body;

            const updatedRegion = await RegionModel.findByIdAndUpdate(id, {
                name,
                coordinates
            }, { new: true });

            if (!updatedRegion) {
                return res.status(404).json({ message: 'Region not found' });
            }

            res.json(updatedRegion);
        } catch (error: any) {
            console.error('Error updating region:', error);
            res.status(500).json({ error: 'Error updating region' });
        }
    }

    async deleteRegion(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const region = await RegionModel.findByIdAndDelete(id);

            if (!region) {
                return res.status(404).json({ message: 'Region not found' });
            }

            res.json(region);
        } catch (error: any) {
            console.error('Error deleting region:', error);
            res.status(500).json({ error: 'Error deleting region' });
        }
    }
}

export default new RegionController();