const Ambulance = require('../models/ambulance')

  const createNewAmbulance =async (req, res) => {
    try{
      const data = await Ride.create(req.body)
      if(data) return res.json({msg: "New Ambulance is added"})
    }catch(err){
      return res.status(500).json({msg: "Adding new ambulance failed due to server error!"})
    }

  }

  const getAmbulance = async(req, res) => {
    const data = await Ride.find()
    return res?.json(data)
  }


  const getAmbulanceById = async(req, res) => {
    const data = await Ride.findById(req.params.id)
    return res?.json(data)
  }

  const updateAmbulanceById = async (req, res) => {
    const ride = await Ride.findByIdAndUpdate(req.params.id, req.body)
   return res.json({msg: "Ambulance Details Updated"})
  }

  const deleteAmbulanceById = async (req, res) => {
    const ride = await Ride.findByIdAndDelete(req.params.id)
   return res.json({msg: "Ambulance Details Deleted Successfully"})
  }


module.exports = { getAmbulance, getAmbulanceById, createNewAmbulance, updateAmbulanceById, deleteAmbulanceById }






