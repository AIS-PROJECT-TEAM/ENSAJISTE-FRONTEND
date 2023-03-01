import styled  from "styled-components"
const NavBarContainer = styled.div`
background-color: #505BF9;
position: sticky;
top: 0;
left: 0;
padding: 6px 14px;
height: 100vh;
width: 60px;
transition: all 0.5s ease;
z-index: 100;

&.active {
  width: 240px;

  .logo {
    opacity: 1;
  }

  .tooltip {
    display: none;
  }

  .links_title {
    display: unset;
  }

  a {
    justify-content: start;

    svg {
      margin-right: 10px;
    }
  }
}

ul {
  margin-top: 20px;
  position: relative;
  width: 100%;
  padding: 0;

  li {
    flex: 1;
    height:50px;
    width:100%;
    line-height:50px;
    position: relative;

    .tooltip {
      position: absolute;
      left: 110px;
      top: 0;
      transform: translate(-50%, -50%);
      height: 35px;
      width: 122px;
      background-color: white !important;
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
      border-radius:6px;
      line-height: 35px;
      color: black;
      text-align: center;
      transition: all .5s ease;
      pointer-events: none;
      opacity: 0;
      display: block;

    }

    .links_title {
      display: none;
    }

    &:hover {
      .tooltip {
        opacity: 1;
        top: 50%;
        
      }
    }

    a {
      width: 100%;
      color: white;
      display: flex;
      align-items: center;
      transition: all 0.4s ease;
      border-radius: 5px;
      padding: 0px 5px;
      white-space: nowrap;
      justify-content: center;

      &:hover {
        background-color: white;
        color: #11101d;
      }

      svg {
        height: 50px;
        object-fit: cover;
        line-height: 50px;
      }

    }
  }
}
`

const LogoContent = styled.div`
color: white;
display: flex;
align-items: center;
height: 50px;
width: 100%;
justify-content: center;

&.active {
  justify-content: space-between;

  .logo, .logo_name {
      display: unset;
      opacity: 1;
  }
}

.logo, .logo_name {
  font-size: 28px;
  margin-right: 5px;
  display: none;
  pointer-events: none;
}

svg {
  cursor: pointer;
}
`

const ProfileContent = styled.div`
position: absolute;
color: white;
bottom: 0;
left: 0;
width: 100%;


&.active {
  .profile {
    justify-content: space-between;
    .profile_details {
      display: flex !important;
      opacity: 1;
      pointer-events: auto;
    }

    #logout {
      margin-left: 5px;
    }
  }
}

.profile {
  position: relative;
  padding: 10px 6px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100% !important;
  background-color: #343DBC;
  text-align: center;

  .profile_details {
    display: none;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;

    img {
      height: 45px;
      width: 45px;
      object-fit: cover;
      border-radius: 50%;
    }

    .name_role {
      margin-left: 10px;

    }

    .name {
      font-size: 14px;
      font-weight: 400;
    }

    .role {
      font-size: 12px;
      text-align: left;
    }

    

  }

  #logout {
    cursor: pointer;
  }
}
`

export {NavBarContainer, LogoContent, ProfileContent}