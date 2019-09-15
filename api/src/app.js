import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import compression from 'compression';
import logger from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import db from './utils/db.js'

mongoose.Promise = global.Promise;

const app = express();

import routes from './routes/index.js';

app.use(logger('dev'));
dotenv.config({path: '.env'});

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// handle CORS
app.use(cors());

app.use(function(req, res, next) {

    res.header("X-powered-by", "Some dude with a twins to feed.");

    res.header("Access-Control-Allow-Origin", "*");
  
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  
    res.header('Content-Type', 'application/json; charset=utf-8');

    if(req.method === 'OPTIONS'){
      res.header("Access-Control-Allow-Methods","POST, PUT, GET, DELETE, PATCH");
      return res.status(200).json({});
    }
  
    next();
});

app.use('/', routes);

export default app;