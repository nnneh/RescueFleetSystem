const { Router } = require('express');
const { getRide ,getRideById, createNewRide , updateRideById, deleteRideById} = require("../controllers/ride");


const app = Router();
app.get('/ride', getRide)
app.get('/ride:id', getRideById)
app.post('/ride', createNewRide)
app.put('/ride:id', updateRideById)
app.delete('/ride:id', deleteRideById)

module.exports = app;
