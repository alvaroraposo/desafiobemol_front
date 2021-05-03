import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import CreateUser from './CreateUser';
import Login from './Login';

function PaginaInicial() {
    const [showModalLogin, setShowModalLogin] = useState(false);
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);
    const [token, setToken] = useState("");
    const [nomeUsuarioLogado, setNomeUsuarioLogado] = useState("");

    useEffect(() => {
        function setInputFilter(textbox, inputFilter) {
            ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
              textbox.addEventListener(event, function() {
                if (inputFilter(this.value)) {
                  this.oldValue = this.value;
                  this.oldSelectionStart = this.selectionStart;
                  this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                  this.value = this.oldValue;
                  this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                  this.value = "";
                }
              });
            });
        }

        function onlyDigits(component) {
            setInputFilter(component, function(value) {
                return /^\d*?\d*$/.test(value);
            });
        }

        const comp = document.querySelector(`[name='cpf']`);
        const comp2 = document.querySelector(`[name='cellphone']`);
        const comp3 = document.querySelector(`[name='fixedphone']`);
        const comp4 = document.querySelector(`[name='rg']`);

        if(comp && comp2 && comp3 && comp4) {
            onlyDigits(comp);
            onlyDigits(comp2);
            onlyDigits(comp3);
            onlyDigits(comp4);
        }            
    })
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
            <Button variant="primary" onClick={() => {setShowModalLogin(true); setShowModalCreateUser(false)}}>
                Logar no Sistema
            </Button>
            <Button variant="primary" onClick={() => {setShowModalCreateUser(true); setShowModalLogin(false)}}>
                Cadastrar Novo Usuário
            </Button>
            
            <Login show={showModalLogin} onHide={onHideModalLogin} afterLogin={(token, nomeUsuario) => setUserInfo(token, nomeUsuario)}/>
            <CreateUser show={showModalCreateUser} onHide={onHideModalCreateUser}/>
        </>
    );
}

export default PaginaInicial;
