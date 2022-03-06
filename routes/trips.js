import express from "express";
import Trip from "../models/trips.js";
const router = express.Router();

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

router.get('/', async (req, res) => {
    try {
        const trip = await Trip.find();
        res.json(trip)
    }
    catch(err) {
        res.status(500).json({ message: err.message })
    }
})

router.delete('/:id', async (req, res) => {
    const { id: tripID } = req.params
    const trip = await Trip.findOneAndDelete({ _id:tripID })
    if(!trip) {
        return res.status(404).json('Trip not found!')
    }
    res.status(200).json({ trip })
})

router.put('/:id', async (req, res) => {
    const { id: tripID } = req.params;
        const trip = await Trip.findOneAndUpdate({
             _id:tripID },
             req.body, {
                 new: true,
                 runValidators: true,
             })
             if(!trip) {
                 res.status(404).json('Trip not found!')
             }
             res.status(200).json({ trip })
})  

export default router;
