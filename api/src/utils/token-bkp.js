const jwt = require('jsonwebtoken');

const SECRET_KEY = '&uaQ76gR#SQPthHV82#Dt=HnUwzbM8KnP&T#uTvG*NsQZMspRt';

function authenticationMiddleware(request, response, next) {
    const token = request.headers["x-access-token"] || request.cookies["x-access-token"];
    

    try {
        const payload = jwt.verify(token, SECRET_KEY);
        console.log('Token válido', payload);
        response.status(200).send(payload);
    }
    catch (exception) {
        console.error('Token inválido', exception);
        response.status(403).send('Acesso negado');
    }
}

function generateToken(payload) {
    delete payload.senha;
    const token = jwt.sign(payload, SECRET_KEY, { encoding: 'UTF8' });
    return token;
}

module.exports = {
    authenticationMiddleware,
    generateToken,
};
