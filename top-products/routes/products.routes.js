import express from 'express';
import { getProducts } from '../controllers/products.controller.js';

const router = express.Router();

router.get('/products/:company/:category', getProducts);

export default router;