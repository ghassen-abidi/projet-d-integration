const mongoose = require("mongoose");
const Schema = mongoose.Schema(
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
        date:Date,
        role: {
            type: String ,
            required: true
        },
        


    }
);
export default mongoose.model("User", Schema);