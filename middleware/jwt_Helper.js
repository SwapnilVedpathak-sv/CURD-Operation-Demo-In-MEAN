// const jwt = require("jsonwebtoken");
// const createError = require('http-errors')

// module.exports = {
//     verifyAccessToken : (req, res, next) => {
//         if(!req.headers['authorization']) return next(createError.Unauthorized())
//         const authHeader = req.headers['authorization']
//         const bearerToken = authHeader.split(' ')
//         const token = bearerToken[1]
//         JWT.verify(token, 'Secret_token', (err, payload) => {
//             if(err){
//                 return next (createError.Unauthorized())
//             }
//             req.payload = payload
//             next()
//         })
//     }
// }


// const auth = async (req, res, next) => {
//     try{
//         const token = req.cookies.jwt;
//         const verifyUser = jwt.verify(token, process.env.SECRET_KEY)
//         consle.log(verifyUser);

//     }
//     catch (error) {
//             res.status(401).send(error)
//     }
// }

// module.exports = auth;


const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
    // console.log("token", TokenizeResult)
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(token, 'secret');
        next();
    } catch (error) {
        res.status(401).json({ message: "You are not authenticated!" });
    }
};
