import express from 'express';
import { getEvenAvg, getFibAvg, getPrimeAvg } from '../controller/calc.controller.js';
const router = express.Router();

router.get('/even', getEvenAvg);
router.get('prime' , getPrimeAvg);
router.get('fib', getFibAvg);
export default router;