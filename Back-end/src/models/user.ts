import mongoose from "mongoose"


const Schema = new mongoose.Schema(
    {
        name: {
            type: String ,
            required: true
        },
        email: {
            type: String ,
            required: true
        },
        password: {
            type: String ,
            required: true
        },
        approuve:{
            type:Boolean,
            default:false
        },
        date:Date,
        role: {
            type: String ,
            required: true
        },
        


    }
);
export default mongoose.model("User", Schema);