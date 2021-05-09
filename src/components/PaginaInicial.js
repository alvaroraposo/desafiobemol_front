import { useEffect, useState } from 'react';
import { Button, Card, CardDeck, CardGroup, Carousel, Col, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import CreateUser from './CreateUser';
import HeaderRow from './HeaderRow';
import Login from './Login';
import MenuRow from './MenuRow';
import ProductRow from './ProductRow';
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

    const onShowModalCreateUser = () => {
        setShowModalCreateUser(true); 
        setShowModalLogin(false);
    }

    function setUserInfo(token, nomeUsuario) {
        setToken(token);
        setNomeUsuarioLogado(nomeUsuario);
        console.log("Token - Nome", token, nomeUsuario);
    }

    return (
        <>
            <HeaderRow></HeaderRow>
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
                        <div id="divLogin" className="col-2 ml-3">
                            <Form>
                                {!token || token === "" ? 
                                    (<Form.Row onClick={() => {setShowModalLogin(true); setShowModalCreateUser(false)}}>
                                        <Col xs={2} className="pt-1 pb-1">
                                            <i class="far fa-user-circle"></i>
                                        </Col>
                                        <Col className="ml-1" >
                                            <p>Faça o  
                                                <strong> login</strong><br/>
                                                ou <strong>registre-se</strong>
                                            </p> 
                                        </Col>
                                    </Form.Row>):
                                    (       
                                    <>
                                        <Dropdown>                                            
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" as="p">                                                
                                                <Form.Row>                                            
                                                    <Col xs={2}>
                                                        <i class="far fa-user-circle mt-2"></i>
                                                    </Col>
                                                    <Col id="colLoggedUser" className="mt-2">
                                                        Olá, {nomeUsuarioLogado}                                               
                                                    </Col>
                                                </Form.Row>                                                                                        
                                            </Dropdown.Toggle>                                            

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1" onClick={() => {setToken(""); setNomeUsuarioLogado("")}}>Sair</Dropdown.Item>                                                        
                                            </Dropdown.Menu>
                                        </Dropdown>                                            
                                    </>
                                    )}                                    
                            </Form>
                        </div>    
                        <div className="col-2">                            
                            <Form>
                                <Form.Row>
                                    <Col xs={2} className="mr-2">
                                        <i class="fas fa-cart-plus"></i>
                                    </Col>
                                    <Col xs={2}>
                                        <p>(0)</p>
                                    </Col>
                                </Form.Row>                                                                
                            </Form> 
                        </div>                                                                    
                    </Navbar>
                </Container>
            </div>
            <MenuRow></MenuRow>            
            <ProductRow></ProductRow>            
            <Login show={showModalLogin} onHide={onHideModalLogin} afterLogin={(token, nomeUsuario) => setUserInfo(token, nomeUsuario)} onCreateUserClick={onShowModalCreateUser}/>
            <CreateUser show={showModalCreateUser} onHide={onHideModalCreateUser}/>
        </>
    );
}

export default PaginaInicial;
