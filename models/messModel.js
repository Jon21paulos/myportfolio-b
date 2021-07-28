import mongoose from 'mongoose';
 
const messSchema = mongoose.Schema({
     name: String,
     email: String,
     message: String,
})

var messModel = mongoose.model('messModel', messSchema);

export default messModel;