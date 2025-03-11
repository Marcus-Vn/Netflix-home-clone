import React, { useState, useRef, useEffect } from 'react';
import SingleItem from './SingleItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = ({list}) => {
    const [currentGroup, setCurrentGroup] = useState(0);
    const [groupWidth, setGroupWidth] = useState(0);
    const itemsGroupRef = useRef(null);
    const Movielist = list.carousel;

    useEffect(() => {
        if (itemsGroupRef.current) {
            setGroupWidth(itemsGroupRef.current.offsetWidth);
        }
    }, []);

    const handlePrevious = () => {
        setCurrentGroup((prevGroup) => (prevGroup > 0 ? prevGroup - 1 : prevGroup));
    };

    const handleNext = () => {
        setCurrentGroup((prevGroup) => (prevGroup < Movielist.length - 1 ? prevGroup + 1 : prevGroup));
    };

    return (
        <div className='carousel'>
            <h2 className='carousel__title'>{list.title}</h2>
            <div className="carousel__slider">
                <div
                    className='carousel__items'
                    style={{ transform: `translateX(-${currentGroup * (groupWidth+4) }px)` }}
                >
                    {Movielist.map((group, index) => (
                        <div
                            className="carousel__items-group"
                            key={index}
                            ref={index === 0 ? itemsGroupRef : null} 
                        >
                            <SingleItem
                                name = {group.items[0].name}  
                                banner={group.items[0].banner}
                                info={group.items[0].info}
                                age={group.items[0].age}
                                moments={group.items[0].moments}
                            />
                            <SingleItem
                                name = {group.items[1].name}  
                                banner={group.items[1].banner}
                                info={group.items[1].info}
                                age={group.items[1].age}
                                moments={group.items[1].moments}
                            />
                            <SingleItem
                                name = {group.items[2].name}  
                                banner={group.items[2].banner}
                                info={group.items[2].info}
                                age={group.items[2].age}
                                moments={group.items[2].moments}
                            />
                            <SingleItem
                                name = {group.items[3].name}  
                                banner={group.items[3].banner}
                                info={group.items[3].info}
                                age={group.items[3].age}
                                moments={group.items[3].moments}
                            />
                            <SingleItem
                                name = {group.items[4].name}  
                                banner={group.items[4].banner}
                                info={group.items[4].info}
                                age={group.items[4].age}
                                moments={group.items[4].moments}
                            />
                        </div>
                    ))}
                </div>
                {currentGroup > 0 && (
                    <button className="carousel__previous" onClick={handlePrevious} aria-label='previous'>
                        <FontAwesomeIcon icon={faAngleLeft} className='carousel__arrow' />
                    </button>
                )}
                {currentGroup < Movielist.length - 1 && (
                    <button className="carousel__next" onClick={handleNext} aria-label='next'>
                        <FontAwesomeIcon icon={faAngleRight} className='carousel__arrow' />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Carousel;