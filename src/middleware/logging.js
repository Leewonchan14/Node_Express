export default (req, res, next) =>{
    let clientIp = req.ip;

    console.log(`[${new Date()}] ${clientIp} ${req.method} ${req.url}`);
    next();
}