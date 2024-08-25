import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header({searchBar,setSearchBar}) {
    
   
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Quick Notes</Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >      
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Title"
              className="me-2"
              aria-label="Search"
              value={searchBar}
              onChange={(e)=>setSearchBar(e.target.value)}

            />
           
          </Form>
       
      </Container>
    </Navbar>
  );
}

export default Header;