import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';
import Logo from '../../assets/Logo.png';

import api from '../../services/api';

export default function EditIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const perfilId = localStorage.getItem('perfilId');

    const navigate = useNavigate();

   async function handleNewIncident(){
        
            navigate('/perfil');
       
    }

    return (
        <div className="edit-incident-container">
        <div className="content">
            <section>
                <img src={Logo} alt='' />

                <h1>Editar post</h1>
                <p>Edite seu post agora mesmo.</p>

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

                <Link className='back-link' to='/perfil'>
                <button className='button' type='submit'>Editar</button>
                </Link>
               
            </form>
        </div>
    </div>
    )
}

