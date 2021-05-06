import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import CreateUser from './CreateUser';
import Login from './Login';
import css from './style/paginainicial.module..css';

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
            <div id="headerRow" className="justify-content-between">
                <Container>
                    <Navbar bg="light" variant="dark" className="justify-content-between">
                        <Nav className="mr-auto">
                            <Nav.Link href="#lojas">Conheça nossas lojas</Nav.Link>                                                                
                            <Nav.Link href="#cartao">Pague com Cartão Bemol</Nav.Link>                                    
                            <Nav.Link href="#fale">Fale Conosco</Nav.Link>                                    
                            <Nav.Link href="#televendas">Televendas: 0800 726 8300</Nav.Link>
                            <Nav.Link href="#whatsapp">WhatsApp Vendas: (92) 98452-2238</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#visite">Visite a Bemol Farma</Nav.Link>                                                                        
                        </Nav>
                    </Navbar>
                </Container>
            </div>
            <div id="logoRow">
                <Container>
                    <Navbar variant="dark">
                        <div className="col-1">
                            <Navbar.Brand href="#home">
                                <img src="images/marca-bemol.svg"/>
                            </Navbar.Brand>
                        </div>                 
                        <div className="col-2">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">
                                    <h3>Lojas Bemol</h3>
                                    <p>Escolha com confiança</p>
                                </Nav.Link>
                            </Nav>
                        </div>       
                        <div className="col-5">
                            <Form>
                                <Form.Row>
                                    <Col xs={10}>
                                        <FormControl type="text" placeholder="O que você procura?"/>
                                    </Col>
                                    <Col>
                                        <Button variant="danger">Buscar</Button>
                                    </Col>
                                </Form.Row>                                                                
                            </Form>
                        </div>                        
                        <div className="col-2">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home"><p>Faça o  <strong>login</strong><br/>ou <strong>registre-se</strong></p></Nav.Link>
                            </Nav>
                        </div>    
                        <div className="col-2">
                            <Nav className="mr-auto">
                                <Nav.Link href="#pricing">Itens</Nav.Link>
                            </Nav>
                        </div>                                                                    
                    </Navbar>
                </Container>
            </div>
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
