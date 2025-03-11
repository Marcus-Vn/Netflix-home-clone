import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCirclePlay, faPlus, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import age0 from '../assets/age_rate/age0.png'
import age10 from '../assets/age_rate/age10.png'
import age12 from '../assets/age_rate/age12.png'
import age14 from '../assets/age_rate/age14.png'
import age16 from '../assets/age_rate/age16.png'
import age18 from '../assets/age_rate/age18.png'

const SingleItem = ({name, banner, info, age, moments}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const ageRating = {
    0: age0,
    10: age10,
    12: age12,
    14: age14,
    16: age16,
    18: age18
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsHovered(true);
    }, 400);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
  };

  useEffect(() => {
    return () => clearTimeout(hoverTimeout);
  }, [hoverTimeout]);
  return (
    <>
      <div 
        className='single-item__container' 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
          <div className="single-item__banner"
          style={{
            boxShadow: isHovered ? "0px 5px 15px rgba(0, 0, 0, 0.75)" : "none",
          }}>
            <img src={banner} alt={name} />
          </div>
          <div className="single-item__info"
          style={{
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? "all" : "none"
          }}>
            <div className="single-item__icons">
              <div className="single-item__icons--group">
                <button className='icon icon__play'>
                  <FontAwesomeIcon icon={faCirclePlay} />
                </button>
                <button className='icon icon__circle'>
                  <FontAwesomeIcon icon={faPlus}/>
                </button>
                <button className='icon icon__circle'>
                  <FontAwesomeIcon icon={faThumbsUp} className='icon__like'/>
                </button>
              </div>
              <button className='icon icon__circle'>
                <FontAwesomeIcon icon={faChevronDown}/>
              </button>
            </div>
            <div className="single-item__info--top">
              <img src={ageRating[age]} alt="classificação etária" />
              <span>{info}</span>
              <p className='single-item__hd'>HD</p>
            </div>
            <div className="single-item__genres">
              {moments.map((group, index) => (
                <p>{group}</p>
              ))}
            </div>
          </div>
      </div>
    </>
  )
}

export default SingleItem