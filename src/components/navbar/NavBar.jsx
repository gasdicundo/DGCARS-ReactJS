import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <Navbar className="navBar" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">DG - Productos</Navbar.Brand>
      <Nav className="categorias">
        <NavLink className={( { isActive} ) => isActive ? "link-active" : ""} to="/">Inicio</NavLink>
        <NavLink className={( { isActive} ) => isActive ? "link-active" : ""} to={`/category/${"men's clothing"}`}>Mens clothing</NavLink>
        <NavLink className={ ({ isActive} ) => isActive ? "link-active" : ""} to="/category/jewelery" >Jewelery</NavLink>
        <NavLink className={ ({ isActive} ) => isActive ? "link-active" : ""} to="/category/electronics" >Electronics</NavLink>
      </Nav>
      <CartWidget/>
    </Container>
    
  </Navbar>
  );
}

export default NavBar;

