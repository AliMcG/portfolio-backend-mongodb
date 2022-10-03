import Keeper from "../models/keeperSchema.js";
import mongoose from "mongoose";
// , 

export const getKeeperData = async (req, res) => {
  const {id} = req.params
  const data = await Keeper.find({userId: id}).sort({ createdAt: -1 });
  console.log(data);
  res.status(200).json(data);
};

// GET / Finds ALL project data and sorts it in order of most recent list.

// POST / Creates a new item document in the database with required "key:value" pairs (i.e. username, item).
export const createKeeperData = async (req, res) => {
  const { title, content, userId } = req.body;
  try {
    const data = await Keeper.create({ title, content, userId });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// DELETE / Deletes an item from the database.
export const deleteKeeperData = async (req, res) => {
  const {id} = req.body
  console.log(id)
  // the if statement checks to see if id is valid and if not returns error message.
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //     return res.status(404).json({error: 'item not found - bad id'})
  // }
  const note = await Keeper.findByIdAndDelete({_id: id})
  
  // This seesm to return both the note(status 200) and the error
  if(!note) {
      return res.status(404).json({error: 'item not found by id number'})
  }
  return res.status(200).json(note)
}

export const updateKeeperData = async (req, res) => {
  const {id} = req.body
  // the if statement checks to see if id is valid and if not returns error message.
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //     return res.status(404).json({error: 'list item not found no id'})
  // }
  const note = await Keeper.findOneAndUpdate({_id: id}, { 
      ...req.body
  }) 
  if(!note) {
      return res.status(404).json({error: 'list item not found'})
  }
  return res.status(200).json(note)
}