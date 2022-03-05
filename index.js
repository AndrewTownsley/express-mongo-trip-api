import express from "express";
import { MongoClient } from "mongodb";
import 'dotenv/config';
import connectDB from "./config/db.js";
import tripRoutes from './routes/trips.js'

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// - Make the trip expense tracker into a fullstack app.
// 		- Make it like a yelp or tripadvisor type site.  Message board for travel.
// 		- Add photo or video upload capability
//      - geolocation capability
// 	- Try to figure out as much as you can by yourself
////////////////////////////////////////////////////////////
const app = express();


app.use(express.json());
app.use('/trip', tripRoutes)
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server Listening on port: ${port}`);
        })
    }
    catch (err) {
        console.log(err);
    }
}

start();
