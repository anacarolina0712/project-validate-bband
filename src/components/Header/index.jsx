import React, {useState} from 'react'
import {Container, Img} from './styles';
import {FaBars} from 'react-icons/fa';
import Sidebar from '../Sidebar';
import Logo from '../img/logo-escrito.jpg';



const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return(
        <Container>
            <FaBars onClick={showSiderbar} />
            {sidebar  && <Sidebar active={setSidebar} />}
              <Img  src={Logo}alt="logo brinquedos bandeirante"/>
             
        </Container>
    )
}
export default Header;