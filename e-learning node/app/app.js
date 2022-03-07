const express = require("express")
const app = express()
const cors = require('cors')

require("dotenv").config()
require("../models/dbconnection/dbconnection")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const StudentRoutes = require("../routes/student.routes")
const AdminRoutes = require("../routes/admin.routes")
const TeacherRoutes = require("../routes/teacher.routes")
const homeRoutes = require('../routes/home.routes')

const userAuth=require("../middleware/user.auth");


app.use("/", homeRoutes)
app.use("/teacher", TeacherRoutes)
app.use("/admin", AdminRoutes)
app.use("/student", StudentRoutes)
app.get("/me",userAuth,(req,res)=>{
    res.send(req.user)
})

module.exports = app
