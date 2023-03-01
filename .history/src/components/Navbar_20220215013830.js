import React , {useState, useEffect} from 'react'
import { useAuth } from '../Context/AuthContext'
import * as biIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import '../styles/Navbar.css';
import { getNavOfRole } from '../data/NavBarData';
import {NavBarContainer, LogoContent, ProfileContent} from "../styles/Navbar"

function Navbar({ toggle, handleToggle: handleToggle}) {

    const [data,setData] = useState(null);
    const { currentUser, logout } = useAuth();

    // Logout
    const handleLogout = async () => {
      const response = await logout();
      if(!response.error){
        window.location.reload();
      }  
    }

    // Get Navbar Data per role
    useEffect(() => {
        var nav = getNavOfRole(currentUser?.roles[0])
        setData(nav);
    }, [currentUser])

  return (
    <>
      <NavBarContainer className={toggle == true ? "active" : ""}>
        <LogoContent className={toggle == true ? "active" : ""}>
          <div className="logo">
            <div className="log_name">
              Ensajiste
            </div>
          </div>
          <AiIcons.AiOutlineMenu onClick={handleToggle} />
        </LogoContent >
        <ul>
          {data && data.map((item,index) => (
            <li className="list">
              <a href={item.path}>
                <span>{item.icon}</span>
                <span className="links_title">{item.title}</span>
              </a>
              <span className="tooltip">{item.title}</span>
            </li>
          ))}
        </ul>
        <ProfileContent className={toggle == true ? "active" : ""}>
          <div className="profile">
            <div className="profile_details">
              <img src={currentUser?.photo || `https://avatars.dicebear.com/api/${currentUser?.gender}/${currentUser?.prenom}${currentUser?.nom}.svg`} alt="ProfileImage"/>
              <div className="name_role">
                <div className="name">{currentUser && `${currentUser.prenom} ${currentUser.nom}`}</div>
                <div className="role">Admin</div>
              </div>
            </div>
            <biIcons.BiLogOut id="logout" onClick={handleLogout}/>
          </div>
        </ProfileContent>
      </NavBarContainer>  
    </>
  )
}

export default Navbar
