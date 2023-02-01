import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// import dotenv from 'dotenv';
// dotenv.config({ path: './config/config.env' });
// console.log(process.env);
import { applicationRouter } from './routers';
export const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(applicationRouter);

app.listen(5001, () => {
  console.log('server run');
});
