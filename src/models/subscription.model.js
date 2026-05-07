import mongoose, {Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // one to whom 'subscriber' is subscribing
        ref: "User"
        //we ref user becoz channel bhi toh comment kr rha toh wo bhi user hai 
    }
}, {timestamps: true})



export const Subscription = mongoose.model("Subscription", subscriptionSchema)