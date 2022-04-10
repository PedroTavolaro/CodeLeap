import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';

import Logo from '../../assets/Logo.png';

export default function Register() {

    const [name, setName] = useState('');

    const navigate = useNavigate();

    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name
        };

        try {
            const response = await api.post('perfil', data);
            alert(`Seu id de acesso: ${response.data.id}`);
           navigate('/')
        }catch (err){
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={Logo} alt='' />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e venha conhecer esse time massa !!!</p>

                    <Link className='back-link' to='/'>
                    <FiArrowLeft size={16} color='#e02041' />
                    Voltar ao Login
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder='Nome' 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    
                    <button className='button' type='submit'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}