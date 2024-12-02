import { Navbar, Container } from 'react-bootstrap';

const AppNavbar = () => (
  <Navbar bg="dark" variant="dark" className='mb-4'>
    <Container>
      <Navbar.Brand href="#">Product Showcase</Navbar.Brand>
    </Container>
  </Navbar>
);

export default AppNavbar;