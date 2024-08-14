import express, { Request, Response } from 'express';
import corsMiddleware from './middleware/corsMiddleware';
import helloWorldRoutes from './routes/helloWorldRoutes';
import axios from 'axios';

const app = express();
app.use(corsMiddleware);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello! This is a Express App.');
// });

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:4000');
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error occurred while fetching data.');
  }
});

app.use('/', helloWorldRoutes);

export default app;
