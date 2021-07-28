import mongoose from 'mongoose';
 
const skillSchema = mongoose.Schema({
     skill: String,
 
})

var skillsModel = mongoose.model('skillsModel', skillSchema);

export default skillsModel;