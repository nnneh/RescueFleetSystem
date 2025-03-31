const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const UserRoute = require('./routes/user')
const RideRoute = require('./routes/ride')
const HospitalRoute = require('./routes/hospital')
const AmbulanceRequestRoute = require('./routes/ambulancerequest')
const dbConnect = require('./db/connection')
const cors = require('cors')

app.use(cors())
app.use(express.json())

dbConnect()
app.use(UserRoute)
app.use(RideRoute)
app.use(HospitalRoute)
app.use(AmbulanceRequestRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
