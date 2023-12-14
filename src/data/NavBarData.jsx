import {FaSchool} from 'react-icons/fa';
import {AiFillHome, AiOutlineFieldTime} from 'react-icons/ai';
import {SiGoogleclassroom} from 'react-icons/si';
import {FcDocument} from 'react-icons/fc';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiFillHome />,
    role : ["Admin", "Student", "User"]
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: <FaSchool />,
    role : ["Student"]
  },
  {
    title: 'Documents',
    path: '/documents',
    icon: <FcDocument />,
    role : ["Student"]
  },
  {
    title: 'Users',
    path: '/salle',
    icon: <SiGoogleclassroom />,
    role : ["Admin"]
  },
  {
    title: 'Documents',
    path: '/creneau',
    icon: <AiOutlineFieldTime />,
    role : ["User"]
  },
];


export const getNavOfRole = (role) => {
    var toReturn = [];
    SidebarData.filter((item) => item.role.includes(role)).forEach((nav) => {
        toReturn.push({...nav, path : `/${role.toLowerCase()}${nav.path}`})
    })
    return toReturn;
}