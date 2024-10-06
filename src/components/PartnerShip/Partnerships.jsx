import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tronic_logo from '../../assets/tronic-logo.png';
import IEEE_logo from '../../assets/IEEE logo.png';
import MicroRewards_logo from '../../assets/MicroRewards_teal.png';
import gavel_logo from '../../assets/gavel.png';
import ICAPS_logo from '../../assets/ICAPS.png';
import code_chefs from '../../assets/code-chefs.png';
import hackSL from '../../assets/HackSL-logo.png';
import Xydder_3D_Logo_Blue from '../../assets/Xydder-3D-Logo-Blue.png';
import photography from '../../assets/White Logo-07.jpg';
import neo from '../../assets/NEO Logo.png';

const cards = [
  { id: 1, image: tronic_logo, title: 'TITLE PARTNER'  },
  { id: 2, image: IEEE_logo, title: 'TECHNOLOGY PARTNER' },
  { id: 3, image: MicroRewards_logo, title: 'DIGITAL CERTIFICATE PARTNER' },
  { id: 4, image: gavel_logo, title: 'MODERATING PARTNER' },
  { id: 5, image: ICAPS_logo, title: 'COLLABORATIVE PARTNER' },
  { id: 6, images: [code_chefs, hackSL], title: 'SOCIAL MEDIA PARTNERS' },
  { id: 7, image: Xydder_3D_Logo_Blue, title: ' 3D PRINTING PARTNER' },
  { id: 8, image: photography, title: ' PHOTOGRAPHY PARTNER' },
  { id: 8, image: neo, title: '  ' },
];

const Partnerships = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <h2 className="relative mt-8 mb-12 text-2xl font-bold text-center text-white md:text-3xl font-krona md:mt-16">
        OUR PARTNERS
      </h2>
      <div id='Achievements' className="p-2 flex justify-center items-center">
        <div className="w-full max-w-6xl">
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="p-4">
                <div className="shadow-md rounded-lg p-2 flex flex-col items-center" style={{ height: '400px', width: '100%' }}>
                  {/* If there are multiple images, render both */}
                  {card.images ? (
                    <div className="bg-white rounded-2xl mt-0 flex justify-around w-full">
                      {card.images.map((image, index) => (
                        <div key={index} className='w-1/2 h-48 border-2 border-gray-300 p-2 flex items-center justify-center overflow-hidden rounded-2xl'>
                          <img
                            src={image}
                            alt={card.title}
                            className="w-full h-full shadow-xl shadow-zinc-900/50"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-2xl mt-0">
                      <div className='w-full h-48 border-2 border-gray-300 p-2 flex items-center justify-center overflow-hidden rounded-2xl'>
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full shadow-xl shadow-zinc-900/50"
                        />
                      </div>
                    </div>
                  )}
                  <h2 className="text-xl font-bold pt-3 text-center text-white font-krona mb-0 pb-0">{card.title}</h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Partnerships;
