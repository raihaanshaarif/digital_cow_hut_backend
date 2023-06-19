import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import appRouter from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import httpStatus from 'http-status';

app.use(cors());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Database Connected Successfully!!');
});

//routes
app.use('/api/v1', appRouter);

// middlewares
app.use(globalErrorHandler);

// not found route
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: `${req.originalUrl} not found`,
    errorMessages: [
      {
        path: req.originalUrl,
        message: `${req.originalUrl} not found`,
      },
    ],
  });
});

export default app;
