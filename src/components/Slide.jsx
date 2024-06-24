import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

//mockData Example
{
  /* <Slide slides={mockData} width="full" height="96" fit="object-contain" /> */
}
// const mockData = [
//   {
//     imgSrc: "https://picsum.photos/1920/540?random=1",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
//     link: {
//       linkSrc: "/hospital/1",
//       button: "line: โรงพยาบาล 1",
//     },
//   },
//   {
//     imgSrc: "https://picsum.photos/1920/540?random=2",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
//     link: {
//       linkSrc: "/hospital/2",
//       button: "line: โรงพยาบาล 2",
//     },
//   },
//   {
//     imgSrc: "https://picsum.photos/1920/540?random=3",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3",
//     link: {
//       linkSrc: "/hospital/3",
//       button: "line: โรงพยาบาล 3",
//     },
//   },
//   {
//     imgSrc: "https://picsum.photos/1920/540?random=4",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 4",
//     link: {
//       linkSrc: "/hospital/4",
//       button: "line: โรงพยาบาล 4",
//     },
//   },
//   {
//     imgSrc: "https://picsum.photos/1920/540?random=5",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 5",
//     link: {
//       linkSrc: "/hospital/5",
//       button: "line: โรงพยาบาล 5",
//     },
//   },
// ];

export default function Slide({ slides, width, height, fit }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
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
    <div className={`w-${width} h-${height}`}>
      <div className="w-full h-full overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full focus:outline-none">
              <img
                src={slide.imgSrc}
                className={`w-full h-full ${fit} object-center focus:outline-none`}
                alt="Tailwind CSS Carousel component"
              />
              <div className="absolute bottom-10 left-10 bg-black bg-opacity-50 p-4 rounded">
                <div className="text-white mb-4">{slide.text}</div>
                <button className="bg-ms-green w-44 text-white py-2 rounded-lg">
                  <Link to={slide.link.linkSrc}>{slide.link.button}</Link>
                </button>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <button onClick={previousSlide} className="btn btn-circle">
                  ❮
                </button>
                <button onClick={nextSlide} className="btn btn-circle">
                  ❯
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}


// Slide.propTypes = {
//   slides: PropTypes.arrayOf(
//     PropTypes.shape({
//       imgSrc: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired,
//       link: PropTypes.shape({
//         linkSrc: PropTypes.string.isRequired,
//         button: PropTypes.string.isRequired,
//       }).isRequired,
//     })
//   ).isRequired,
//   width: PropTypes.string,
//   height: PropTypes.string,
//   fit: PropTypes.string,
// };

Slide.defaultProps = {
  width: "full",
  height: "96", // default height, you can change as needed
  fit: "object-cover", // 'object-cover', 'object-none', etc., as alternatives
};
