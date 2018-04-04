import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">FinanzApp</h1>
            <p>Es hora de tener tus gastos bajo control.</p>
            <button className="button" onClick={startLogin}>Iniciar con Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
