import express, { Response, Request, Router } from 'express';
import image_sizing from '../../util/image_resizer';
import path from 'path';

const image_display: Router = express();

const resizedImagePath: string = path.resolve('./') + '/images/resizedImage';
const originImagePath: string = path.resolve('./') + '/images';
// the image name from the images dir
const images = 'creed';

// set up the get object
image_display.get(
  '/',
  async (req: Request, res: Response): Promise<void | unknown> => {
    // converting the type from number to string
    const imageName: string = req.query.image as string;
    const height: number = parseInt(req.query.height as string);
    const width: number = parseInt(req.query.width as string);
    //validate the inputs and error messages
    if (!imageName || images != 'creed') {
      return res.status(400)
        .send(`something went wrong ! try to check if the image name is exist,
         there is only one image {creed.jpg} `);
    }
    if (
      height <= 0 ||
      width <= 0 ||
      !height ||
      !width ||
      isNaN(width) ||
      isNaN(height)
    ) {
      return res.status(400).send('Error: unvalid width or height');
    }

    try {
      // parameters to get  the cached image
      const imageName: string = req.query.image as string;
      const height: number = parseInt(req.query.height as string);
      const width: number = parseInt(req.query.width as string);
      // resizing the image with the image_resizer module
      await image_sizing(imageName, width, height);
      // save and serve the image as cashed into the resized images file
      const resizedImage = `${resizedImagePath}/${imageName}_${width}_${height}.jpg`;
      // adding the image to resized image file and view it in the browser
      res.sendFile(resizedImage);
    } catch (error) {
      res.status(400);
      res.send(error);
    }
  }
);

export { resizedImagePath, originImagePath };
export default image_display;
