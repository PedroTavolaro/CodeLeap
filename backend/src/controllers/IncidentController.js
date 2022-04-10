const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const {page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('perfil', 'perfil_id', '=', 'incidents.perfil_id')
        .limit(5)
        .offset((page -1) * 5)
        .select([
        'incidents.*', 
        'perfil.name']);

        response.header('X-Total-Count', count['count(*)'])
        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description} = request.body;
        const perfil_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            perfil_id
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const perfil_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('perfil_id')
        .first();

        if (incident.perfil_id != perfil_id) {
            return response.status(401).json({error: 'Operation not permitted'});
        }
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};