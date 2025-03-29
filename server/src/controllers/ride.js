const Ride = require('../models/ride')

  const createNewRide =async (req, res) => {
    try{
      const data = await Ride.create(req.body)
      if(data) return res.json({msg: "Ride Request Created !!"})
    }catch(err){
      return res.status(500).json({msg: "Ride request creating failed due to server error!"})
    }

  }

  const getRide = async(req, res) => {
    const data = await Ride.find()
    return res?.json(data)
  }


  const getRideById = async(req, res) => {
    const data = await Ride.findById(req.params.id)
    return res?.json(data)
  }

  const updateRideById = async (req, res) => {
    const ride = await Ride.findByIdAndUpdate(req.params.id, req.body)
   return res.json({msg: "Ride Request Updated"})
  }

  const deleteRideById = async (req, res) => {
    const ride = await Ride.findByIdAndDelete(req.params.id)
   return res.json({msg: "Ride Request Deleted Successfully"})
  }


module.exports = { getRide, getRideById, createNewRide, updateRideById,deleteRideById }





