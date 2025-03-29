const Ambulance = require('../models/ambulancerequest')

  const createNewAmbulanceRequest =async (req, res) => {
    try{
      const data = await Ambulance.create(req.body)
      if(data) return res.json({msg: "New Ambulance Request Created !!"})
    }catch(err){
      return res.status(500).json({msg: "New ambulance request creating failed due to server error!"})
    }

  }

  const getAmbulanceRequest = async(req, res) => {
    const data = await Ambulance.find()
    return res?.json(data)
  }


  const getAmbulanceRequestById = async(req, res) => {
    const data = await Ambulance.findById(req.params.id)
    return res?.json(data)
  }

  const updateAmbulanceRequestById = async (req, res) => {
    const ride = await Ambulance.findByIdAndUpdate(req.params.id, req.body)
   return res.json({msg: "New Ambulance Request Updated"})
  }

  const deleteAmbulanceRequestById = async (req, res) => {
    const ride = await Ambulance.findByIdAndDelete(req.params.id)
   return res.json({msg: "Ambulance Request Deleted Successfully"})
  }


module.exports = { getAmbulanceRequest, getAmbulanceRequestById, createNewAmbulanceRequest, updateAmbulanceRequestById, deleteAmbulanceRequestById }





