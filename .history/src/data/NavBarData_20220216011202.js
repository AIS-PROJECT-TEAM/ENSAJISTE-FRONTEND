import {FaSchool} from 'react-icons/fa';
import {AiFillHome, AiOutlineFieldTime} from 'react-icons/ai';
import * as biIcons from 'react-icons/bi';
import {SiGoogleclassroom} from 'react-icons/si';


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text',
    role : ["Admin", "Student", "User"]
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: <FaSchool />,
    cName: 'nav-text',
    role : ["Student"]
  },
  {
    title: 'Users',
    path: '/salle',
    icon: <SiGoogleclassroom />,
    cName: 'nav-text',
    role : ["Admin"]
  },
  {
    title: 'Documents',
    path: '/creneau',
    icon: <AiOutlineFieldTime />,
    cName: 'nav-text',
    role : ["User"]
  },
  
  {
    title: 'Logout',
    path: '',
    icon: <biIcons.BiLogOut />,
    cName: 'nav-text',
    role: ["Admin", "Student", "User"]
  },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];


export const getNavOfRole = (role) => {
    var toReturn = [];
    SidebarData.filter((item) => item.role.includes(role)).forEach((nav) => {
        toReturn.push({...nav, path : `/${role.toLowerCase()}${nav.path}`})
    })
    return toReturn;
}