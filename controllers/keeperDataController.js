import Keeper from "../models/keeperSchema"

// getKeeperData, createKeeperData, updateKeeperData, deleteKeeperData



// GET / Finds ALL project data and sorts it in order of most recent list.
export const getProjectData = async (req, res) => {
  const projectData = await Project.find().sort({createdAt: -1})
  console.log(projectData)
  res.status(200).json(projectData)
}


// POST / Creates a new item document in the database with required "key:value" pairs (i.e. username, item).
export const createProjectData = async (req, res) => {
  const {name, description, image, gitlink, sitelink} = req.body
  let emptyFields = []
  // IF statement to catch an empty item string - to avoid null data in the database.
  // if (!item) {
  //     emptyFields.push('item')
  // } 
  // if (emptyFields.length > 0) {
  //     return res.status(404).json({error: 'please correct data'})
  // }
  //add doc to DB
  try{
      const projectData= await Project.create({name, description, image, gitlink, sitelink})
      res.status(200).json(projectData)
  } catch (error) {
      res.status(404).json({error: error.message})
  }
}