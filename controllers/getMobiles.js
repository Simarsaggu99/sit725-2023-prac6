const Mobile = require("../model/mobile")

const getMobiles = async (req, res, next) =>{
    try{
        const mobile = await Mobile.find()
        res.json({
            status:200,
            success:true,
            message:"success",
            data:mobile
        })
    }
    catch(error){
        console.log(error)
        next(error)
    }
}

module.exports = getMobiles;