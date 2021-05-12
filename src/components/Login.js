import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import '../App.css';
import LabelInput from './LabelInput';
import css from './style/modal.module.css'
import axios from 'axios';

function Login(props) {    
    const [focusedInput, setFocusedInput] = useState("username");
    const [errorMessage, setErrorMessage] = useState("");
    const [state, setState] = useState({
        username: "",
        password: "",
        token: "",
        firstname: "",
    });

    useEffect(() => {
        const f = (focusedInput) ? focusedInput : "firstname";
        const nextComponent = document.querySelector(`[name=${focusedInput}]`);
        if(nextComponent)
            nextComponent.focus();        
    }, [focusedInput])    

    const onLoginClick = async () => {
        const validateLogin = () => {
            console.log(state.username, state.password);

            function validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }

            if(!validateEmail(state.username))
            {
                setFocusedInput("username");
                setErrorMessage("E-Mail Inválido");
                return false;
            }

            if(state.password.length < 6 || state.password.length > 10) {
                setFocusedInput("password");
                setErrorMessage("Senha Inválida");
                return false;
            }

            return true;
        }    

        const sendData = async () => {
            const connectionString = "https://5v01jp94bj.execute-api.us-east-1.amazonaws.com/dev/login"
            try {
                const result = await axios["post"](connectionString, state);
                const token = (result && result.data) ? result.data.token : null;
                const firstname = (token && token.length > 5) ? result.data.firstname : null;
                setErrorMessage("");
                setState({username: "", password: "", token, firstname});
                props.afterLogin(token, firstname);
                props.onHide();
            }
            catch(error) {
                console.log(error)
                props.afterLogin("", "");
                if(error.response.status === 401) {
                    setFocusedInput("username");
                    setErrorMessage("Login ou Senha não autorizados");
                }
            }            
        }    
        if(validateLogin()) {
            await sendData();            
        }            
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={css.modal}
            onEntered={() => {                 
                document.querySelector(`[name='username']`).focus();
            }}
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter" className={css.modalTitle}>
                    Já é cadastrado? Faça seu login!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <span>{errorMessage}</span>
                <LabelInput myLabel="E-Mail" myName="username" myValue={state.username} onInputChange={(newUsername) => {setState({...state, username: newUsername})}}/>
                <LabelInput myLabel="Senha" myType="password" myName="password" myValue={state.password} onInputChange={(newPassword) => {setState({...state, password: newPassword})}}/>
                <div className="text-center">
                    <Button variant="primary" onClick={onLoginClick} className="mt-2">
                        Entrar
                    </Button>
                </div>                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onCreateUserClick}>
                    Cadastrar Novo Usuário
                </Button>
                <Button variant="light" onClick={() => {setErrorMessage(""); props.onHide()}}>Fechar</Button>
            </Modal.Footer>
        </Modal>
         
    );
}

export default Login;
