import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as biIcons from 'react-icons/bi';
import * as SiIcons from 'react-icons/si';
import * as FcIcons from 'react-icons/fc';
import * as HiIcons from 'react-icons/hi';


export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    role : ["Admin", "Student", "User"]
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: <FaIcons.FaSchool />,
    cName: 'nav-text',
    role : ["Student"]
  },
  {
    title: 'Users',
    path: '/salle',
    icon: <SiIcons.SiGoogleclassroom />,
    cName: 'nav-text',
    role : ["Admin"]
  },
  {
    title: 'Documents',
    path: '/creneau',
    icon: <AiIcons.AiOutlineFieldTime />,
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