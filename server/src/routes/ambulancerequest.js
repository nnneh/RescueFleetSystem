const { Router } = require('express');
const { getAmbulanceRequest ,getAmbulanceRequestById, createNewAmbulanceRequest , updateAmbulanceRequestById, deleteAmbulanceRequestById} = require("../controllers/ambulancerequest");


const app = Router();
app.get('/ambulancerequest', getAmbulanceRequest)
app.get('/ambulancerequest:id', getAmbulanceRequestById)
app.post('/ambulancerequest', createNewAmbulanceRequest)
app.put('/ambulancerequest:id', updateAmbulanceRequestById)
app.delete('/ambulancerequest:id', deleteAmbulanceRequestById)

module.exports = app;
