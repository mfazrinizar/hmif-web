"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
    const [isOpen, setOpen] = useState(false)

    const variants = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (

        <motion.div
            className='bg-image relative'
            id="home-section"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 1.25 }}
        >
            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="bynoWLAUCvY" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-1xl pt-16 lg:pt-40 sm:pb-24 px-6 justify-center">
                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <div className='arrowTwo'></div>
                        <div className='col-span-12 flex flex-col items-center'>
                            <div className='col-span-5 lg:-m-48'>
                                <div className='arrowThree'></div>
                                <div className='arrowFour'></div>
                                <div className='arrowFive'></div>
                                <Image
                                    src="/images/Banner/banner.svg"
                                    alt="nothing"
                                    width={512}
                                    height={512}
                                    className="mt-[-95px] lg:mt-0"
                                />
                                <div className='arrowSix'></div>
                                <div className='arrowSeven'></div>
                                <div className='arrowEight'></div>
                            </div>
                            <div className='lg:mb-48'></div>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-white md:4px flex justify-center items-center text-center">
                                Himpunan Mahasiswa Informatika UNSRI
                            </h1>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'>Sebuah wadah untuk menampung dan mengeksekusi aspirasi warga Teknik Informatika.</p>
                            <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 align-middle justify-center md:justify-start'>
                                <button
                                    className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton'
                                    onClick={() => window.location.href = 'https://oprec.hmifunsri.com'}
                                >
                                    Daftar Sekarang
                                </button>
                                <button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-white'>
                                    <Image src={'/images/Banner/playbutton.svg'} alt="button-image" className='mr-3' width={47} height={47} />
                                    Profil
                                </button>
                            </div>
                            <div ref={ref} style={{ marginTop: '20px' }}>
                                {inView && (
                                    <motion.div
                                        variants={variants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 1 }}
                                    >
                                        <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Banner;