"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

const Banner = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='bg-image relative' id="home-section">
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
                                <Image src="/images/Banner/banner.svg" alt="nothing" width={512} height={512} />
                                <div className='arrowSix'></div>
                                <div className='arrowSeven'></div>
                                <div className='arrowEight'></div>
                            </div>
                            <div className='lg:mb-48'></div>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-4 text-white md:4px flex justify-center items-center text-center">
                                Himpunan Mahasiswa Informatika UNSRI
                            </h1>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'>Sebuah wadah untuk menampung dan mengeksekusi aspirasi warga Teknik Informatika.</p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <button
                                    className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'
                                    onClick={() => window.location.href = 'https://oprec.hmifunsri.com/daftar'}
                                >
                                    Daftar Sekarang
                                </button>
                                <button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-white'><Image src={'/images/Banner/playbutton.svg'} alt="button-image" className='mr-3' width={47} height={47} />Profil</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;