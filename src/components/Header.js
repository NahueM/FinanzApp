import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
    <header>
        <h1> FinanzApp </h1>
        <NavLink to="/dashboard" activeClassName="is-active">Home</NavLink>
        <NavLink to="/create" activeClassName="is-active"> Agregar Gasto</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default  connect(undefined, mapDispatchToProps)(Header);
