import express from 'express';
import RegionController from '../controllers/regionController';

const regionRouter = express.Router();

regionRouter.post('/', RegionController.createRegion);
// router.get('/', UserController.getUsers);
// router.get('/:id', UserController.getUser);
// router.put('/:id', UserController.updateUser);
// router.delete('/:id', UserController.deleteUser);

export default regionRouter;