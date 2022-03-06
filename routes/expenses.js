import express from "express";
import Expense from "../models/expenses.js";
const router = express.Router();

router.get('/', async (req, res) => {
    const expenses = await Expense.find({})
        res.status(200).json({expenses})
})

router.post('/', async (req, res) => {
    const expense = await Expense.create(req.body)
        res.status(200).json({expense})
    // res.json({
    //     trip: req.body.trip,
    //     date: req.body.date,
    //     amount: req.body.date,
    //     category: req.body.category,
    //     descritpion: req.body.description,
    // })
})

router.put('/:id', (req, res) => {
    res.json('Put Expense')
})

router.delete('/:id', (req, res) => {
    res.json('Delete Expense')
})

export default router;