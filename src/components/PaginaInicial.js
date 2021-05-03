import { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import CreateUser from './CreateUser';
import Login from './Login';

function PaginaInicial() {
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [token, setToken] = useState("");
    const [nomeUsuarioLogado, setNomeUsuarioLogado] = useState("");

    const onHideModalLogin = () => {
        setShowModalLogin(false); 
    }

    const onHideModalCreateUser = () => {
        setShowModalCreateUser(false); 
    }

    function setUserInfo(token, nomeUsuario) {
        setToken(token);
        setNomeUsuarioLogado(nomeUsuario);
    }

    return (
        <>
            <span>Bem-vindo(a) - {nomeUsuarioLogado}</span>
            <Button variant="primary" onClick={() => setShowModalLogin(true)}>
                Logar no Sistema
            </Button>
            <Button variant="primary" onClick={() => setShowModalCreateUser(true)}>
                Cadastrar Novo Usuário
            </Button>
            
            <Login show={showModalLogin} onHide={onHideModalLogin} afterLogin={(token, nomeUsuario) => setUserInfo(token, nomeUsuario)}/>
            <CreateUser show={showModalCreateUser} onHide={onHideModalCreateUser}/>
        </>
    );
}

export default PaginaInicial;
