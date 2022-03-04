import express from "express";
import { MongoClient } from "mongodb";
import 'dotenv/config';
import tripRoutes from './routes/trips.js'

const app = express();

app.use(express());
app.use('/', tripRoutes)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))

