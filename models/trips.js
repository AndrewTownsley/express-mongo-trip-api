import mongoose from "mongoose";


const TripSchema =  new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 100,
        }
    }
)

export default mongoose.model('Trip', TripSchema);