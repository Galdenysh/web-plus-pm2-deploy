import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { errors } from 'celebrate';
// import cors from 'cors';
import errorHandler from './middlewares/error-handler';
import { DB_ADDRESS, PORT } from './config';
import routes from './routes';

const app = express();
mongoose.connect(DB_ADDRESS);

// Только для локальных тестов
// app.use(cors());
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
