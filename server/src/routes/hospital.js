const { Router } = require('express');
const { getHospital, getHospitalById, updateHospitalById, createNewHospital } = require("../controllers/hospital");


const app = Router();
app.get('/hospital', getHospital)
app.get('/hospital:id', getHospitalById)
app.post('/hospital', createNewHospital)
app.put('/hospital:id', updateHospitalById)

module.exports = app;
