function notFound(req,res,next){
    res.status(404).json({
        status:'not found',
        message:'Sorry the page you are looking for does not exist!!!'
    })
    next();
}

module.exports = notFound;