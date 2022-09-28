import mongoose from 'mongoose';

const Schema = mongoose.Schema

//Schema to create object and specify type of data. Moongoose.schema is an inbuilt function.

const keeperSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  completed: {
    type: String
  }
  
}, { timestamps: true} )

export default mongoose.model('Keeper', keeperSchema)