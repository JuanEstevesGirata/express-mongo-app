import {Router} from 'express';
import { getHome } from '../controllers';

const router = Router();



router.get('/', getHome)


export default router;  