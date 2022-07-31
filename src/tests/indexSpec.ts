import imageResizer from '../util/image_resizer';
import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

// testing the image resizer function
describe('image resizer test', () => {
  it('expect to retrun the resized image', async () => {
    const imageName = 'creed';
    const resize = await imageResizer(imageName, 800, 800);
    const resizedImage = true;
    expect(resize).toEqual(resizedImage);
  });
});

describe('testing endpoint of the main api status', () => {
  it('test the main api route', async () => {
    const respons = request.get('/api');
    expect((await respons).status).toBe(200);
  });
});

describe('testing the original image route', () => {
  it('testing the original image route', async () => {
    const response = request.get('/api/creed.jpg');
    expect((await response).status).toBe(200);
  });
});

describe('testing the main app endpoint ', () => {
  it('main app endpoint', async () => {
    const response = request.get('/');
    expect((await response).status).toBe(200);
  });
});

describe('testing the resized image endpoint ', async () => {
  it('should get the path of the resized iamge ', async () => {
    const response = await request.get(
      '/api/resizedImage/?image=creed&height=800&width=800'
    );
    expect((await response).status).toBe(200);
  });
});
