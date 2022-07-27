import mongoose from 'mongoose';

const Schema = mongoose.Schema

//Schema to create object and specify type of data. Moongoose.schema is an inbuilt function.

const projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  gitlink: {
    type: String,
    required: true
  },
  sitelink: {
    type: String
  }
  
}, { timestamps: true} )

export default mongoose.model('Project', projectSchema)