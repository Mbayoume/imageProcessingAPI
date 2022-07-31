import express from 'express';
import routes from './routes/index';
const app = express();

// set up the port
const port = 8080;

// api middleware
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('server ON');
});
// listen to the server response
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
