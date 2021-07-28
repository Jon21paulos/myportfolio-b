import mongoose from 'mongoose';
 
const testimonialSchema = mongoose.Schema({
     qoute: String,
     image: String,
     name: String,
     company: String,
})

var testimonialsModel = mongoose.model('testimonialsModel', testimonialSchema);

export default testimonialsModel;