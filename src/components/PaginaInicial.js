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
                            <Nav.Link href="#lojas"><i class="fas fa-map-marker-alt"></i> Conheça nossas lojas</Nav.Link>                                                                
                            <Nav.Link href="#cartao"><i class="far fa-credit-card"></i> Pague com Cartão Bemol</Nav.Link>                                    
                            <Nav.Link href="#fale"><i class="fas fa-phone-volume"></i> Fale Conosco</Nav.Link>                                    
                            <Nav.Link href="#televendas"><i class="fas fa-phone-volume"></i> Televendas: 0800 726 8300</Nav.Link>
                            <Nav.Link href="#whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp Vendas: (92) 98452-2238</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#visite">
                                <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#farma" width="20" alt="Bemol Farma"/>
                                <strong>Visite a Bemol Farma</strong>
                            </Nav.Link>                                                                        
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
                        <div className="col-2 ml-3">
                            <Form>
                                <Form.Row>
                                    <Col xs={2} className="pt-1 pb-1">
                                        <i class="far fa-user-circle"></i>
                                    </Col>
                                    <Col className="ml-1">
                                        <p>Faça o  <strong>login</strong><br/>ou <strong>registre-se</strong></p>
                                    </Col>
                                </Form.Row>                                                                
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
            <div id="menuRow">
                <Container>
                    <Navbar variant="dark">
                        <div className="col-2">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1"> 
                                    <i class="fas fa-border-none"></i>                                    
                                </Nav.Link>
                                <Nav.Link>
                                    <p>Compre por departamento</p>
                                </Nav.Link>                                
                            </Nav>
                        </div> 
                        <div className="col-1">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                                    <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#smartphone" width="40" alt="Smartphone"/>
                                    <span className="mt-0">Celulares</span>
                                </Nav.Link>                                
                            </Nav> 
                        </div>                            
                        <div className="col-1">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                                    <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#eletro" width="40" alt="Eletro"/>
                                    <span className="mt-0">Eletrodomésticos</span>
                                </Nav.Link>                                
                            </Nav>                                                        
                        </div>      
                        <div className="col-1">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                                    <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#chair" width="40" alt="Móveis"/>
                                    <span className="mt-0">Móveis</span>
                                </Nav.Link>                                
                            </Nav>                                                        
                        </div>
                        <div className="col-1">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                                    <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#info" width="40" alt="Informática"/>
                                    <span className="mt-0">Informática</span>
                                </Nav.Link>                                
                            </Nav>                                                        
                        </div>
                        <div className="col-1">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                                    <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#clima" width="40" alt="Climatização"/>
                                    <span className="mt-0">Climatização</span>
                                </Nav.Link>                                
                            </Nav>                                                        
                        </div>
                        <div className="col-1">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                                    <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#tv" width="40" alt="Tv e Vídeo"/>
                                    <br/><span className="mt-0">TV e Vídeo</span>
                                </Nav.Link>                                
                            </Nav>                                                        
                        </div>      
                        <div className="col-1">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                                    <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#games" width="40" alt="Games"/>
                                    <span className="mt-0">Games</span>
                                </Nav.Link>                                
                            </Nav>                                                        
                        </div>   
                        <div className="col-1">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                                    <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#oferta" width="40" alt="Ofertas"/>
                                    <span className="mt-0">Ofertas</span>
                                </Nav.Link>                                
                            </Nav>                                                        
                        </div>                 
                        <div className="col-1">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                                    <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#bemolcard" width="40" alt="Cartão Bemol"/>
                                    <span className="mt-0">Cartão Bemol</span>
                                </Nav.Link>                                
                            </Nav>                                                        
                        </div>                                          
                        <div className="col-1">
                            <Nav className="mr-auto p-0">
                                <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                                    <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#presente" width="40" alt="Lista de Presentes"/>
                                    <span className="mt-0">Presentes</span>
                                </Nav.Link>                                
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
