import mongoose from 'mongoose';
 
const projectSchema = mongoose.Schema({
     title: String,
     subtitle: String,
     description: String,
     image: String,
     link: String,
 
})

var projectsModel = mongoose.model('projectsModel', projectSchema);

export default projectsModel;