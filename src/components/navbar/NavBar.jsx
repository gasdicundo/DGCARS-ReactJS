import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar className="navBar" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">DG - Productos</Navbar.Brand>
      <Nav className="categorias">
        <NavLink className={( { isActive} ) => isActive ? "link-active" : ""} to="/">Inicio</NavLink>
        <NavLink className={( { isActive} ) => isActive ? "link-active" : ""} to="/category/Accesorios">Acceosrios</NavLink>
        <NavLink className={ ({ isActive} ) => isActive ? "link-active" : ""} to="/category/Lavado">Lavado</NavLink>
        <NavLink className={ ({ isActive} ) => isActive ? "link-active" : ""} to="/category/Mecanica">Mecanica</NavLink>
        {/* <NavLink className={( { isActive} ) => isActive ? "link-active" : ""} to="/cart">Cart</NavLink> */}
      </Nav>
      <NavLink className={( { isActive} ) => isActive ? "link-active" : ""} to="/cart"><CartWidget/></NavLink>
    </Container>
    
  </Navbar>
  );
}

export default NavBar;