import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';
import { v4 as uuidv4 } from 'uuid';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms) );
}

router.get('/:id', async (req: Request, res: Response) => {
  const {id} = req.params;
  const item = await User.findByPk(id);
  res.send(item);
});

router.get('/users/:username', async (req: Request, res: Response) => {
  const {username} = req.params;
  let pid = uuidv4();
  let logMessage = `${new Date().toLocaleString()} + : ${pid} - User ${username} requested for resource`;
  console.log(logMessage);
  sleep(Math.random()*1000).then(()=> {
    console.log(logMessage);
  });

});

export const UserRouter: Router = router;
