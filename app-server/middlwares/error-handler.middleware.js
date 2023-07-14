function errorHandler (err,req,res,next){
    // console.log(err)
    res.status(500).json({
        status:'error',
        message:'Sorry server error'
    });
    next();
}

module.exports = errorHandler;