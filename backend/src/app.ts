import 'dotenv/config';

import express, { Request } from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';
import cors, { CorsOptions } from 'cors';
import errorHandler from './middlewares/error-handler';
import {
  CORS_URL_HTTP, CORS_URL_HTTPS, DB_ADDRESS, PORT,
} from './config';
import routes from './routes';

const app = express();
mongoose.connect(DB_ADDRESS);

const allowlist = [CORS_URL_HTTP, CORS_URL_HTTPS];
const corsOptionsDelegate = (
  req: Request,
  callback: (error: Error | null, corsOptions?: CorsOptions) => void,
) => {
  const corsOptions = { origin: false };
  const header = req.header('Origin');

  if (header !== undefined && allowlist.indexOf(header) !== -1) {
    corsOptions.origin = true; // reflect (enable) the requested origin in the CORS response
  }

  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Тест на перезапуск pm2
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(routes);
app.use(errors());
app.use(errorHandler);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('ok'));
