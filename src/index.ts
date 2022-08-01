import express, { request, response } from 'express';
import routes from './routes/index';
const app = express();

// set up the port
const port = 8080;

// api middleware
app.use('/api', routes);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('server ON');
});
// listen to the server response
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
