module.exports =  notFoundMiddleWare = async(req, res)=>{
    res.status(404).json({ msg: "Endpoint Not Found" })
}
