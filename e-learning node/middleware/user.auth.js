const jwt = require('jsonwebtoken');
const resData = require('../app/helper/resData');
const teacherModel=require("../models/teacher.model");
const studentModel=require("../models/student.model");
const userAuth = async (req, res, next) =>{
    try{    
        let token = req.header('Authorization').replace('bearer ', "")
        let newtoken = token.slice(1)
        let data = jwt.verify(newtoken, process.env.TOKENHASHSECRET)
        let user = await studentModel.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
        user = await teacherModel.findOne({ _id: data._id, 'tokens.token': token });
        if(!user){
            throw new Error("you are not authorized")
        }
        else{
            req.user=user
            next()
        }
    }
    else{
        req.user=user;
        next()
    }
    }
    catch(e){
        resData(res, 500, true, e.message, 'faild to get this page')
    }

}
module.exports = userAuth