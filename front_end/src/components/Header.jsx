import React from 'react'
import logoNetflix from '../assets/netflix-logo.png'
import profile from '../assets/netflix-profile-icon.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={scrolled ? "header scrolled" : "header"}>
      <div className="header__left">

        <a href="/">
          <img className="header__logo" src={logoNetflix} alt="logo da Netflix" />
        </a>
        <a className="header__home" href="/">Início</a>
        <a href="/">Séries</a>
        <a href="/">Filmes</a>
        <a href="/">Bombando</a>
        <a href="/">Minha Lista</a>
        <a href="/">Navegar por idiomas</a>
      </div>

      <div className="header__right">
        <FontAwesomeIcon icon={faMagnifyingGlass} />

        <a href="/">Infantil</a>

        <FontAwesomeIcon icon={faBell} />

        <div className='header__profile-container'>
          <a href="/">
            <img className='header__profile-image' src={profile} alt="ícone de perfil" />
          </a>
        </div>
      </div>

    </div>
  )
}

export default Header