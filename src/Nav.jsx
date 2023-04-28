import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
    
    
const Nav = () => {
        return ( 
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Counter</Navbar.Brand>
            </Container>;
            </Navbar>
)}
 
export default Nav;