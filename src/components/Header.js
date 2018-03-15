import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1> FinanzApp </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active">Agregar Gasto</NavLink>
        <NavLink to="/help" activeClassName="is-active">Pagina de Ayuda</NavLink> 
    </header>
);

export default Header;
