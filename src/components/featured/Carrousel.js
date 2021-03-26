import React from 'react';
import Slider from 'react-slick';
import ghost_one from '../../resources/images/ghost_one.jpg';
import ghost_two from '../../resources/images/ghost_two.jpg';
import ghost_three from '../../resources/images/ghost_three.jpg';

const Carrousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${ghost_one})`,
                            height:`${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>

                <div>
                     <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${ghost_two})`,
                            height:`${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>

                <div>
                     <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${ghost_three})`,
                            height:`${window.innerHeight}px`
                        }}
                    >
                    </div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Carrousel;