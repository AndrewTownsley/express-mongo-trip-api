import express from "express";
import Trip from "../models/trips.js";
const router = express.Router();

// POST { name }
//When the user wants to add a new expense, the app will invoke the /expense endpoint with the POST method, with some parameters that describe the expense
//POST /expense { 
    // trip(id),
    //  date,
    //   amount,
    //    category( provide list of static categories),
    //     description
    //  }
    router.post('/post', async (req, res) => {
        const trip = new Trip({
            name: req.body.name,
        })
        try {
            const saveTrip = await trip.save();
            res.status(200).json(saveTrip);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    })

// GET/expenses {trip}
    router.get('/', async (req, res) => {
        try {
            const trip = await Trip.find();
            res.json(trip)
        }
        catch(err) {
            res.status(500).json({ message: err.message })
        }
    })
// PUT trips

// DELETE trips

export default router;
