import mongoose from "mongoose";
const FormSchema = new mongoose.Schema({
  
    title:{type:String, required: true},
    
    description:{type:String, required: true}
}, {timestamp:true})
export default mongoose.model('form', FormSchema)