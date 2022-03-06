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
})

router.put('/:id', (req, res) => {
    res.json('Put Expense')
})

router.delete('/:id', async (req, res) => {
    const { id: expenseID} = req.params
    const expense = await Expense.findOneAndDelete({ _id:expenseID })
    if(!expense) {
        res.status(404).json('Expense not found!')
    }
    res.status(200).json({ expense })
})

export default router;