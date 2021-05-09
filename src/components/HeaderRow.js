import { Container, Nav, Navbar } from "react-bootstrap";

function HeaderRow() {
    return (
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
    )
  }
  
  export default HeaderRow;