import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Perfil from './pages/Perfil';
import NewIncident from './pages/NewIncident';

export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Logon />} />
                <Route path='/register' element={<Register />} />
                <Route path='/perfil' element={<Perfil />} />
                <Route path='/incidents/new' element={<NewIncident />} />
                
            </Routes>
        </BrowserRouter>
    )
}