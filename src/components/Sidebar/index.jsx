import React from 'react'
import { Container, Content, Div } from './styles'
// import Button from '../Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
  FaSignOutAlt
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }
  const { signout } = useAuth();
  const navigate = useNavigate();


  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
 
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaChartBar} Text="Tarefas" />
        <SidebarItem Icon={FaEnvelope} Text="Email" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Calendario" />
        <SidebarItem Icon={FaIdCardAlt} Text="Funcionários" />
        <SidebarItem Icon={FaRegFileAlt} Text="Relatórios" />

      <Div>
        <SidebarItem Icon={FaUserAlt} Text="Usuario" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
        <Link to="/" onClick={() => [signout(), navigate("/")]}>
            <SidebarItem Icon={FaSignOutAlt} Text= "Sair"/>
        </Link> 
      </Div>
      </Content>
    </Container>
  )
}

export default Sidebar