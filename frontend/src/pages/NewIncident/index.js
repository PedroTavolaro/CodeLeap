import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import Logo from '../../assets/Logo.png';

import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const perfilId = localStorage.getItem('perfilId');

    const navigate = useNavigate();

   async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: perfilId,
                }
            })
            alert('Post cadastrado com sucesso !!!');
            navigate('/perfil');
        }catch(err) {
            alert('Error ao cadastrar post, tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={Logo} alt='' />

                <h1>Criar novo post</h1>
                <p>Faça seu post agora mesmo.</p>

                <Link className='back-link' to='/perfil'>
                <FiArrowLeft size={16} color='#e02041' />
                Voltar para Home
                </Link>
                
            </section>
            <form onSubmit={handleNewIncident}>
                <input 
                placeholder='Nome' 
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                placeholder='Descrição' 
                value={description}
                onChange={e => setDescription(e.target.value)}
                />
                <button className='button' type='submit'>Cadastrar</button>
            </form>
        </div>
    </div>
    )
}

