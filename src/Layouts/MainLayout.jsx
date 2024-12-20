import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar";
import "./MainLayout.css";

const MainLayout = () => {
    return (
      <Container className="container">
        <Navbar />
        <div className="wrapper">
          <Outlet />
        </div>
      </Container>
    );
  };
  
  export default MainLayout;