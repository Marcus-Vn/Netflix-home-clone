import React from 'react'
import banner from '../assets/stranger-things-banner.jpg'
import seriesLogo from '../assets/stranger-things-logo.png'
import ageRate from '../assets/age_rate/age16.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import Carousel from './Carousel'
import { contentArray } from '../assets/database/movies.js'

const Main = () => {

  const movies = contentArray;

  console.log(contentArray)
  return (
    <>
      <div className='main'>
          <div className='main__highlight'>
            <img className='main__banner' src={banner} alt="banner da série stranger things" />
            <div className='main__banner-leftShadow'></div>
            <div className='main__banner-bottomShadow'></div>
            <div className='main__info'>
              <img src={seriesLogo} alt="logo da série stranger things" />
              <p className='main__info-synopsis'>Quando um garoto desaparece, uma pequena cidade descobre um mistério envolvendo experimentos secretos, terríveis forças sobrenaturais e uma garotinha estranha.</p>
              <div className='main__info-buttons'>
                <button className='main__info-button button-play'><FontAwesomeIcon icon={faPlay} className='main__info-icon'/> Assistir</button>
                <button className='main__info-button button-info'><FontAwesomeIcon icon={faCircleInfo} className='main__info-icon'/> Mais informações</button>
              </div>
            </div>
            <div className='main__rate-bar'>
              <img className='main__age-rate' src={ageRate} alt="classificação etária" />
            </div>
          </div>
          <div className='main__content-list'>
            <Carousel list={movies[0]}/>
            <Carousel list={movies[1]}/>
            <Carousel list={movies[2]}/>
          </div>
          <div className='footer'>
          </div>
      </div>
    </>
  )
}

export default Main