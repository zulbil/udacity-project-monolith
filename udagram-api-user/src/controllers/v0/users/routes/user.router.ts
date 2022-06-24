import {Router, Request, Response} from 'express';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';
import { v4 as uuidv4 } from 'uuid';

const router: Router = Router();

function sleep(ms: any) {
  return new Promise(resolve => setTimeout(resolve, ms) );
}

// router.get('/:id', async (req: Request, res: Response) => {
//   try {
//     const {id} = req.params;
//     const item = await User.findByPk(id);
//     if(!item) {
//       throw new Error(`User #${id} is not found`);
//     }
//     return res.send(item).status(200);
//   } catch (error: any) {
//     return res.send(error.message).status(400); 
//   }
  
// });

router.get('/:username', (req: Request, res: Response) => {
  const {username} = req.params;
  let pid = uuidv4();
  let logMessage = `${new Date().toLocaleString()} : ${pid} - User ${username} requested for resource`;
  console.log(logMessage);
  sleep(Math.random()*1000).then(()=> {
    console.log(logMessage);
  });

  return res.send({ "message" : logMessage }).status(200);
});


export const UserRouter: Router = router;
