import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";

const images = [
    "/images/p1.webp",
    "/images/p2.webp",
    "/images/9.webp",
    "/images/c1.jpg",
    "/images/c2.webp",
    "/images/c3.webp",
];

function PrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="absolute -bottom-10 left-1/3 lg:top-[300px] md:left-1/4 z-10 cursor-pointer text-[#81817a] uppercase text-[12px] tracking-wide font-medium" onClick={onClick}>
            Prev
        </div>
    );
}

function NextArrow(props: any) {
    const { onClick } = props;
    return (
        <div className="absolute -bottom-10 right-1/3 lg:top-[300px] md:right-[22%] lg:[20%] xl:right-1/4 z-10 cursor-pointer text-[#81817a] uppercase text-[12px] tracking-wide font-medium" onClick={onClick}>
            Next
        </div>
    );
}

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevImage, setprevImage] = useState(-1)
    const [nextImage, setNextImage] = useState(-2)

    useEffect(() => {
        setNextImage(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
        setprevImage(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }, [currentSlide])

    const getFlexDirection = (index: number) => {
        if (index === prevImage) {
            return "justify-start -translate-x-8 xl:translate-x-0";
        } else if (index === currentSlide) {
            return "justify-center xl:translate-x-8";
        } else if (index === nextImage) {
            return "justify-end translate-x-[15%] 2xl:translate-x-[30%]";
        } else {
            return "";
        }
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        beforeChange: (current: number, next: number) => {
            setCurrentSlide(next);
        },
        centerMode: true,

        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        centerPadding: "0px",

    };

    const settingsMobile = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => {
            setCurrentSlide(next);
        },
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,

    };

    return (
        <div className="">
            <div className="w-[100%] hidden lg:block relative overflow-hidden h-[580px] max-h-[580px] ">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div className={`${index === currentSlide ? 'slide slide-active ' : 'slide'} transition-all duration-500 ease-in-out h-full`} key={index}>
                            <div className={`w-[400px] flex ${getFlexDirection(index)} items-center h-[580px]`}>
                                <img src={image} alt="" className="object-cover transition-all duration-500 ease-in-out" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className=" relative lg:hidden overflow-hidden h-[580px] max-h-[580px] ">
                <Slider {...settingsMobile} >
                    {images.map((image, index) => (
                        <div className={`h-[500px] transition-all duration-500 ease-in-out`} key={index}>
                            <div className="px-4 ">
                                <img src={image} alt="" className="object-cover transition-all duration-500 ease-in-out h-[500px] w-screen" />
                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ImageSlider;