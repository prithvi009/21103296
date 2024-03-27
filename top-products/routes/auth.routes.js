import express from 'express';

import { companyRegister, companyLogin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', companyRegister);

router.post('/login', companyLogin);

export default router;