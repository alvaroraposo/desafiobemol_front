import { Card, CardDeck, Carousel, Container, Nav } from "react-bootstrap";

function ProductRow() {
    return (
        <div id="productRow">
            <Container>
                <Nav className="justify-content-center">
                    <a className="mt-2 mb-2"><img src="images/banner01.jpg"/></a>
                </Nav>
            </Container>                                                
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/carrossel01.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/carrossel02.jpg"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="images/carrossel03.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Container className="mt-2 mb-5">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src="images/card01.jpg" />                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="images/card02.jpg" />                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="images/card03.jpg" />                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="images/card04.jpg" />                        
                    </Card>
                </CardDeck>            
            </Container>                
        </div>
    );
  }
  
  export default ProductRow;