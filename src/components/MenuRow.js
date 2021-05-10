import { Container, Nav, Navbar } from "react-bootstrap";

function MenuRow() {
    return (
        <>
            <div id="menuRowCollapsed" className="d-flex d-md-none">
                <div className="col-1 mr-4">
                    <Nav className="mr-auto p-0">
                        <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                            <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#smartphone" width="40" alt="Smartphone"/>
                            <span className="mt-0">Celulares</span>
                        </Nav.Link>                                
                    </Nav> 
                </div>                            
                <div className="col-1 mr-5">
                    <Nav className="mr-auto p-0">
                        <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                            <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#eletro" width="40" alt="Eletro"/>
                            <span className="mt-0">Eletrodomésticos</span>
                        </Nav.Link>                                
                    </Nav>                                                        
                </div>      
                <div className="col-1 mr-3">
                    <Nav className="mr-auto p-0">
                        <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                            <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#chair" width="40" alt="Móveis"/>
                            <span className="mt-0">Móveis</span>
                        </Nav.Link>                                
                    </Nav>                                                        
                </div>
                <div className="col-1 mr-4">
                    <Nav className="mr-auto p-0">
                        <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                            <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#info" width="40" alt="Informática"/>
                            <span className="mt-0">Informática</span>
                        </Nav.Link>                                
                    </Nav>                                                        
                </div>
                <div className="col-1 mr-5">
                    <Nav className="mr-auto p-0">
                        <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                            <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#clima" width="40" alt="Climatização"/>
                            <span className="mt-0">Climatização</span>
                        </Nav.Link>                                
                    </Nav>                                                        
                </div>
                <div className="col-1 mr-4">
                    <Nav className="mr-auto p-0">
                        <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                            <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#tv" width="40" alt="Tv e Vídeo"/>
                            <br/><span className="mt-0">TV e Vídeo</span>
                        </Nav.Link>                                
                    </Nav>                                                        
                </div>      
                <div className="col-1 mr-3">
                    <Nav className="mr-auto p-0">
                        <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                            <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#games" width="40" alt="Games"/>
                            <span className="mt-0">Games</span>
                        </Nav.Link>                                
                    </Nav>                                                        
                </div>   
                <div className="col-1 mr-3">
                    <Nav className="mr-auto p-0">
                        <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                            <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#oferta" width="40" alt="Ofertas"/>
                            <span className="mt-0">Ofertas</span>
                        </Nav.Link>                                
                    </Nav>                                                        
                </div>                 
                <div className="col-1 mr-3">
                    <Nav className="mr-auto p-0">
                        <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                            <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#bemolcard" width="40" alt="Cartão Bemol"/>
                            <span className="mt-0">Cartão Bemol</span>
                        </Nav.Link>                                
                    </Nav>                                                        
                </div>                                          
                <div className="col-1 mr-2">
                    <Nav className="mr-auto p-0">
                        <Nav.Link href="#home" className="mt-1 mb-0 p-0"> 
                            <img src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/header/icons-svg.svg#presente" width="40" alt="Lista de Presentes"/>
                            <span className="mt-0">Presentes</span>
                        </Nav.Link>                                
                    </Nav>                                                        
                </div>
            </div>
            <div id="menuRow" className="d-none d-md-flex">
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
        </>        
    );
  }
  
  export default MenuRow;