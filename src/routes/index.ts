import express, { Request, Response } from 'express';
const routes = express.Router();
import displayImage from './api/image_display';

routes.get('/', (req: Request, res: Response) => {
  res.send('welcome to the main rout (type the image name to process it)');
});

routes.use('/resizedImage', displayImage);
// show the original image in the main route
routes.use('/', express.static('./images'));
export default routes;
