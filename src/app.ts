import express, { Request, Response } from 'express';
import helloWorldRoutes from './routes/helloWorldRoutes';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello! This is a Express App');
});

app.use('/', helloWorldRoutes);

export default app;
