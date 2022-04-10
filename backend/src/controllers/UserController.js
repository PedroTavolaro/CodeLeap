const connection = require("../database/connection");

module.exports = {
    async index(request, response){
        const perfil_id = request.headers.authorization;

        const incidents = await connection('incidents').where('perfil_id', perfil_id)
        .select('*');

        return response.json(incidents);
    }
}