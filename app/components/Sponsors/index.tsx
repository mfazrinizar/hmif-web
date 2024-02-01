import React, { useEffect } from "react";
import Slider from "react-slick";
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/images/Sponsors/pertamina.svg"
    },
    {
        imgSrc: "/images/Sponsors/pertamina.svg"
    },
    {
        imgSrc: "/images/Sponsors/pertamina.svg"
    },
    {
        imgSrc: "/images/Sponsors/pertamina.svg"
    },
    {
        imgSrc: "/images/Sponsors/pertamina.svg"
    },
    {
        imgSrc: "/images/Sponsors/pertamina.svg"
    },
    {
        imgSrc: "/images/Sponsors/pertamina.svg"
    },
    {
        imgSrc: "/images/Sponsors/pertamina.svg"
    },
];

const MultipleItems = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const h3Variants = {
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0 } }
    };

    const sliderVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0 } }
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <motion.div
            className='text-center bg-lightpink mt-56 my-motion-div'
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={sliderVariants}
        >
            <div className='text-center mb-1'>
                <motion.h3
                    className='text-offwhite text-3xl md:text-5xl font-bold mb-3'
                    variants={h3Variants}
                    initial="hidden"
                    animate={controls}
                >
                    Sponsors & Partners
                </motion.h3>
            </div>
            <div className="mx-auto max-w-2xl py-16 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                <Slider {...settings}>
                    {data.map((item, i) =>
                        <div key={i}>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={128} height={128} />
                        </div>
                    )}
                </Slider>
            </div>
        </motion.div>
    );
};

export default MultipleItems;