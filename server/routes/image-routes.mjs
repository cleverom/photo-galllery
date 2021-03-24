import express from 'express';
import imageController from '../controllers/image-controller.mjs';

const router = express.Router();

router.get('/', imageController.getAllImages);


router.post('/upload', imageController.uploadImage);

export default router;