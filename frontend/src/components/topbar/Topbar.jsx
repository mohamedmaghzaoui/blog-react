import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import "./topbar.css"; // For any additional custom styles

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="top pt-4">
<Container fluid className="d-flex align-items-center justify-content-between">
      
        <Navbar.Brand as={Link} to="/">
        <img className=" ms-3"  src="https://mona-edu.com/static/media/logo.dde0f47a7a0f87fc245873157aa3b046.svg" alt="" />
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mr-auto ">
         
            <Nav.Link className="col-3 "  as={Link} to="/">
            Accueil</Nav.Link>
            <Nav.Link className="col-3" >À propos</Nav.Link>
            <Nav.Link className="col-3" >Évenement</Nav.Link>
            {user && (
              <>
                <Nav.Link  className="col-4 text-center offset-xl-8 me-4 add-blog  "  as={Link} to="/write">Ajouter un blog</Nav.Link>
                <Button variant="outline-danger" className="logout" onClick={handleLogout}>déconnexion</Button>
              </>
            )}
            {!user && (
              <>
                <Nav.Link className="me-3  "  as={Link} to="/login">Connexion</Nav.Link>
                <Nav.Link className="me-3 "  as={Link} to="/register">Inscription</Nav.Link>
              </>
            )}
          </Nav>
          {user && (
            <Nav className="ml-auto offset-xl-6">
              <Nav.Link as={Link} to="/settings">
                <img
                  className="topImg"
                  src="https://mona-edu.com/static/media/avatar_topbar.b276af6bf74a3ef6ad877ade4ae6386a.svg"
                  alt=""
                />
              </Nav.Link>
            </Nav>
          )}
          <Nav className="ml-auto">
            <Nav.Link>
              <i className="topSearchIcon fas fa-search"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
