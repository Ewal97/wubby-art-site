import React from 'react';
import Heptagram from './app/assets/img/heptagramLogo.png';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar dark sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={Heptagram} alt='wubbys heptagram logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      Let's continue
    </div>
  );
}

export default App;
