const resData = require("../app/helper/resData");
const teacherModel = require('../models/teacher.model')
const jwt = require('jsonwebtoken')

const teacherAuth = async (req, res, next) => {
    try {
        let token = req.header('Authorization').replace('bearer ', "")
        let newtoken = token.slice(1)
        let data = jwt.verify(newtoken, process.env.TOKENHASHSECRET)
        let user = await teacherModel.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) throw new Error("you are not authorized")
        req.user = user
        req.token = token
        next()
    } catch (e) {
        resData(res, 500, true, e.message, 'faild to get this page')
    }
}


module.exports = teacherAuth