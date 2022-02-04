import {Router, Request, Response} from 'express';
import { mainModule } from 'process';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/', async (req: Request, res: Response) => {
  res.send(`in users`);
});

router.get('/:id', async (req: Request, res: Response) => {
  try{
    const {id} = req.params;
    //const item = await User.findByPk('m@mail.com');
    const item = await User.findByPk(id);
    item?res.send(item):res.send(`can't find users for id ${id}`);
  }catch(error){
    res.send(` server error`);
  }
  
});

export const UserRouter: Router = router;
