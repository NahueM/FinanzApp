// HOC (Higher Order Component) - un componente que renderiza otro componente


import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> La imformacion es: {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> esta es informacion privada, por favor no compartir </p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>debe autenticarse</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info="este es el detalle" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="este es el detalle" />, document.getElementById('app'));
