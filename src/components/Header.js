import { Navbar, NavbarBrand } from 'reactstrap';
import Heptagram from '../app/assets/img/heptagramLogo.png';

const Header = () => {
    return (
        <Navbar dark sticky='top' expand='md'>
          <NavbarBrand href='/'>
                <img src={Heptagram} alt='wubbys heptagram logo' />
          </NavbarBrand>
      </Navbar>
    )
};

export default Header;