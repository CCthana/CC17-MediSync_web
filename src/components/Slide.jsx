import Slider from "react-slick";

import { useRef } from "react";

export default function Slide({ slides }) {
    const sliderRef = useRef(null);
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };
  
    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const previousSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="relative overflow-hidden max-h-[600px]">
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="focus:outline-none">
                        <img
                            src={slide.imgSrc}
                            className="w-full focus:outline-none object-center"
                            alt={`Image ${index}`}
                        />
                    </div>
                ))}
            </Slider>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={previousSlide} className="btn btn-circle">
                    ❮
                </button>
                <button onClick={nextSlide} className="btn btn-circle">
                    ❯
                </button>
            </div>
        </div>
    );
}
