import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__social'>
            <a href="https://www.facebook.com/netflixbrasil" target='_blank'>
                <FontAwesomeIcon icon={faFacebookF} className='social-media'/>
            </a>
            <a href="https://www.instagram.com/NetflixBrasil/#" target='_blank'>
                <FontAwesomeIcon icon={faInstagram} className='social-media'/>
            </a>
            <a href="https://x.com/NetflixBrasil" target='_blank'>
                <FontAwesomeIcon icon={faTwitter} className='social-media'/>
            </a>
            <a href="https://www.youtube.com/user/NetflixBRA" target='_blank'>
                <FontAwesomeIcon icon={faYoutube} className='social-media'/>
            </a>
        </div>
        <div className="footer__help">
            <a className='footer__help-wraper'>Audio Descrição</a>
            <a className='footer__help-wraper'>Central de Ajuda</a>
            <a className='footer__help-wraper'>Cartão pré-pago</a>
            <a className='footer__help-wraper'>Imprensa</a>
            <a className='footer__help-wraper'>Relações com investidores</a>
            <a className='footer__help-wraper'>Carreiras</a>
            <a className='footer__help-wraper'>Termos de uso</a>
            <a className='footer__help-wraper'>Privacidade</a>
            <a className='footer__help-wraper'>Avisos Legais</a>
            <a className='footer__help-wraper'>Preferências de cookies</a>
            <a className='footer__help-wraper'>Informações corporativas</a>
            <a className='footer__help-wraper'>Entre em contato</a>
        </div>
        <p className='footer__code'>Código do Serviço</p>
        <p className='footer__copyright'>© 1997-2025 Netflix, Inc.</p>
        
    </div>
  )
}

export default Footer