import { Sidebar,Menu,MenuItem,SubMenu,sidebarClasses } from "react-pro-sidebar"
import { Link } from "react-router-dom"


export default function Side() {
  return (
    <Sidebar>
      <Menu>
        <SubMenu label="Dashboard">
          <MenuItem>Home</MenuItem>
          <MenuItem>Exemplo-1</MenuItem>
          <MenuItem>Exemplo-2</MenuItem>
        </SubMenu>
        <SubMenu label="Perfil">
          <MenuItem>Sua conta</MenuItem>
          <MenuItem>Avatar</MenuItem>
          <MenuItem>Sair</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
    
  )
}
