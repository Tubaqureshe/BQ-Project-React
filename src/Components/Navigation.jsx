import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { FaReact } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/Ai'
import { BiLogIn } from 'react-icons/Bi'
import { VscAccount } from 'react-icons/Vsc'
import Cart from './Cart';
function Navigation() {
  return (
    <>
    <style>
      {`
      .btn {
        --btn-gradient: var(--btn-gradient-from),var(--btn-gradient-to);
        border: 0 none;
        appearance: none;
        transition: all .3s;
        border-radius: 10px;
        box-shadow: 0 0 2px 2px var(--btn-shadow), 0 0 4px 4px var(--btn-shadow), 0 0 8px 8px var(--btn-shadow);
      }
      
      .btn,
      .btn * {
        box-sizing: border-box;
      }
      
      .btn-inner {
        position: relative;
        border-radius: inherit;
        border: 1px solid transparent;
        font-size: 1rem;
        display: flex;
        align-items: center;
        min-width: 10rem;
        padding: 1.5rem 2rem;
        overflow: hidden;
        color: var(--btn-text-color);
      }
      
      .btn-label {
        position: absolute;
        bottom: 1px;
        left: 1px;
        right: 1px;
        top: 1px;
        border-radius: inherit;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--btn-bg);
        background-image: linear-gradient(to bottom,var(--btn-gradient));
      }
      
      .btn:hover {
        transform: translateY(-5px);
        letter-spacing: 3px;
        box-shadow: rgba(0, 131, 253, 0.596) 0px 1px 80px 40px;
      }
      
      .btn:active {
        border-radius: 40px;
        transform: translateY(4px);
        transition: 0.1s;
        letter-spacing: 3px;
        box-shadow: rgb(0, 131, 253) 0px 1px 80px 40px;
      }
      
      .btn:active .btn-blur:before {
        --transition: 0.5s;
      }
      
      .btn--primary {
        --btn-bg: #111111;
        --btn-gradient-from: #111111;
        --btn-gradient-to: rgba(29, 6, 240, 0.5);
        --btn-text-color: #ffffff;
        --btn-shadow: #9b14c438;
      }
      
      `}
    </style>
    <Navbar expand="lg" className="bg-dark" >
      <Container >
        <Navbar.Brand to="#home "  className='text-white'
          ><FaReact size={50} color='blue' /> React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <div className="d-flex align-items-center">
              <Link to="/" className='mx-3 text-decoration-none text-white justify-content-between ' > <AiOutlineHome /> Home</Link>
              <Link to="/products" className=' mx-3 text-decoration-none text-white'>  Products</Link>
              <Link to="/Category" className=' mx-3 text-decoration-none text-white'> Category</Link>

            </div>
          </Nav>
          
          <div>
            <Link to="/Registration" className='mx-2 text-decoration-none btn btn-dark '> <BiLogIn /> Registration</Link>
            {/* <Link to="/SignIn" className=' text-decoration-none btn btn-dark '> <  VscAccount /> Sign In</Link> */}
      
          </div>
          <Cart />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation; 