const crypto = require('crypto');
const connection = require ('../database/connection');

module.exports = {
    async index (request, response) {
           const perfil = await connection('perfil').select('*');
           return response.json(perfil);
    },

    async create(request, response) {
        const { name } = request.body;

        const id = crypto.randomBytes(4).toString('Hex');
    
       await connection('perfil').insert({
            id,
            name,
        })

        return response.json({ id }); 
    }
}