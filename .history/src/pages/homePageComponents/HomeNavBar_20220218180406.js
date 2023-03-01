import React from 'react'
import { Link } from "react-router-dom";


export default function HomeNavBar() {
  return (
    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <a href="index.html" class="logo me-auto"><img src="assets/img/ensa.png" alt=""/></a>
      
        <a class="nav-link scrollto " href="#accueil">Accueil</a>
        <a class="nav-link scrollto" href="#about">À propos de nous</a>
        <a class="nav-link scrollto" href="#services">Services</a>
        <a class="nav-link scrollto" href="#doctors">Equipes</a>
        
        
      <Link to="/login" class="appointment-btn scrollto"><span class="d-none d-md-inline">S'identifier</span></Link>

    </div>
  </header>
  )
}
