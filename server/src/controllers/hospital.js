const Hospital = require('../models/hospital')

    const createNewHospital = async (req, res) => {
        try{
            const data = await Hospital.create(req.body)
            if(data) return res.json({msg: "Hospital Added "})
        }catch(err){
            return res.status(500).json({msg: "Adding hospital failed due to server error!"})
        }
    }

    const getHospital = async (req, res) => {
        const data = await Hospital.find()
        return res?.json(data)
    }

    const getHospitalById = async (req, res) => {
        const data = await Hospital.findById(req.params.id)
        return res?.json(data)
    }

    const updateHospitalById = async (req, res) => {
        const hospital = await Hospital.findByIdAndUpdate(req.params.id, res.body)
        return res.json({msg: "Hospital details are updated"})
    }

  

module.exports = { getHospital, getHospitalById, createNewHospital, updateHospitalById }





