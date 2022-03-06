import mongoose from "mongoose";


const TripSchema =  new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 100,
        },
        date: {
            type: String,
            required: false,
            maxlength: 20
        },
        cost: {
            type: String,
            required: true,
        }
    }
)

export default mongoose.model('Trip', TripSchema);