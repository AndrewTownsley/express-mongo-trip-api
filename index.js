import express from "express";
import { MongoClient } from "mongodb";
import 'dotenv/config';
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

app.use(express());
app.use('/', tripRoutes)

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))

