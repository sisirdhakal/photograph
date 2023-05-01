import React, { useState } from 'react'
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

type Props = {}

const images = [
    "/images/p1.jpg",
    "/images/p2.jpg",
    "/images/p3.jpg",
    "/images/c1.jpg",
    "/images/c2.jpg",
    "/images/c3.jpg",
    "/images/img1.jpg",
    "/images/marriage.jpg",
];

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="absolute -bottom-10 left-1/4 lg:left-[38%]  z-10 cursor-pointer text-[#81817a] uppercase text-[12px] tracking-wide flex justify-center items-center font-medium" onClick={onClick}>
            <BsArrowLeft className='w-auto h-6 text-[#81817a]' />
            <div className='w-12 lg:w-16 h-[2px] -ml-4 bg-[#81817a]'></div>
        </div>
    );
}

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="absolute -bottom-10 right-1/4 lg:right-[38%] z-10 cursor-pointer text-[#81817a] uppercase text-[12px] tracking-wide font-medium flex justify-center items-center" onClick={onClick}>
            <div className='w-12 lg:w-16 -mr-4 h-[2px] bg-[#81817a]'></div>
            <BsArrowRight className='w-auto h-6 text-[#81817a]' />
        </div>
    );
}

const ImageSlider = (props: Props) => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const settings = {
        infinite: true,
        // centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        beforeChange: (current: number, next: number) => setCurrentSlide(next + 1),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
    };
    return (
        <div className='mb-20'>
            <div className=" relative h-full ">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div className={` transition-all duration-500 ease-in-out h-full`} key={index}>
                            <div className={` flex $ items-center mx-2 lg:mx-0 h-[314px] lg:h-[580px]`}>
                                <img src={image} alt="" className="object-cover transition-all duration-500 w-full h-full lg:max-w-[340px] ease-in-out mx-auto" />
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className='absolute -bottom-8 w-full h-[10px] flex justify-center items-center'>
                    <div className=" mx-auto z-10 cursor-pointer text-[#81817a] uppercase text-[12px] tracking-wide font-medium flex justify-center items-center" >
                        <span className=''>
                            {currentSlide}
                        </span>
                        <span className='text-xl mx-1'>/</span>
                        <span className=''>
                            {images.length}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImageSlider