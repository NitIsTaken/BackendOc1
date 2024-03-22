const jwt = require('jssonwebtoken');



module.exports = (res, res, next) => {
    try {
        const token = req.header.authorization.split('')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
    } catch(error) {
        res.status(401).json({error});
    }
};