import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:4000', 
  methods: 'HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
