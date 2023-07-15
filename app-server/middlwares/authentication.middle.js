const auth = async(req,res,next)=>{
    const headers = req.headers.authorization;
    if (!headers || !headers.startsWith('Bearer')) {
        return res.status(401).json({
            status:'unauthorized',
            message:'Sorry you are not authorized to perform this action.'
        })
    }

    const token = headers.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET)
    next();
}

module.exports = auth;