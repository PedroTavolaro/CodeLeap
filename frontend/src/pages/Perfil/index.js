import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './styles.css';
import Logo from '../../assets/Logo.png';
import api from '../../services/api';

import './styles.css';

export default function Perfil() {
    const [incidents, setIncidents] = useState([]);

    const perfilId = localStorage.getItem('perfilId');
    const perfilName = localStorage.getItem('perfilName');

    const navigate = useNavigate();

    useEffect(() => {
        api.get('user', {
            headers: {
                Authorization: perfilId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [perfilId]);

    async function handleDeleteIncident(id) {
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: perfilId,
                }
            });
            alert('Deletado com sucesso.');
            setIncidents(incidents.filter(incident => incident.id != id));
        }catch (err) {
            alert('Error ao deletar caso, tente novamente.');
        }
    }

    function handleLogout(){
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="perfil-container">
            <header>
                <img src={Logo} alt='' />
                <span>Bem vindo(a), {perfilName}</span>
                <Link className='button' to='/incidents/new'>
                    Cadastrar novo post
                </Link>
                <button onClick={handleLogout} type='button'>
                    <FiPower size={18} color='#e02041' />
                </button>
            </header>

            <h1>Posts cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                        <li key={incident.id}>
                        <strong>Post</strong>
                        <p>{incident.title}</p>
                        <strong>Description</strong>
                        <p>{incident.description}</p>
                        
                        <button onClick={() => handleDeleteIncident(incident.id)} type='button'>
                            <FiTrash2 size={20} color="#a8a8b3"/>delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
