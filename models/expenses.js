import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema(
    {
        trip: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        }
    }
)

export default mongoose.model('Expense', ExpenseSchema);