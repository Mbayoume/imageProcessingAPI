import sharp from 'sharp';
import { response } from 'express';
import path from 'path';
import { originImagePath, resizedImagePath } from '../routes/api/image_display';

const imageResizer = async (
  imageName: string,
  width: number,
  height: number
): Promise<boolean | unknown> => {
  const image: string = path.join(`${originImagePath}`, `${imageName}.jpg`);
  const resizedImage: string = path.join(
    `${resizedImagePath}`,
    `${imageName}_${width}_${height}.jpg`
  );
  try {
    await sharp(image).resize(width, height).toFile(resizedImage);
    return true;
  } catch (error) {
    response.send(error + 'someting went wrong');
  }
};

export default imageResizer;
