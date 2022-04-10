import React, { useState } from 'react';
import './styles.css';
import Logo from '../../assets/Logo.png';
import eu from '../../assets/eu.jpg';
import { FiLogIn } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';

import api from '../../services/api';

export default function Logon(){

    const [id, setId] = useState('');

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('perfilId', id);
            localStorage.setItem('perfilName', response.data.name);

            navigate('/perfil');
        }catch(err){
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className='logon-container'>
            <section className='form'>
            <img src={Logo} alt='logo' />
            
            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>

                <input 
                placeholder='Sua ID' 
                value={id}
                onChange={e => setId(e.target.value)}
                />
                <button className='button' type='submit'>Entrar</button>

                <Link className='back-link' to='/register'>
                    <FiLogIn size={16} color='#e02041' />
                    Não tenho cadastro
                </Link>
            </form>
            
          
            </section>

            <img className='eu' src={eu} alt='eu' />

        </div>
    )
}