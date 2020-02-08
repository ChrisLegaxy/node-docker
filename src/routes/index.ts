import express, { Router } from 'express';
import controller from '../controllers';

const router: Router = Router();

router.get('/', controller);

export default router;
