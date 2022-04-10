const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const perfil = await connection('perfil')
        .where('id',id)
        .select('name')
        .first();

        if(!perfil) {
            return response.status(400).json({ error: 'No perfil found with this ID' });
        }
        return response.json(perfil);
    }
}