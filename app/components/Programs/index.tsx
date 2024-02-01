'use client';

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


interface programsdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const programsdata: programsdata[] = [
    {
        imgSrc: '/images/Programs/programOne.svg',
        heading: 'Mentoring Pemrograman',
        subheading: 'Membantu mahasiswa baru memahami pemrograman dasar.',
    },
    {
        imgSrc: '/images/Programs/programTwo.svg',
        heading: 'Srifoton',
        subheading: 'Mewadahi kreativitas, inovasi, dan kemampuan akademik mahasiswa di bidang teknologi informasi.',
    },
    {
        imgSrc: '/images/Programs/programThree.svg',
        heading: 'IF Cup',
        subheading: 'Mewadahi sportivitas dan kreativitas mahasiswa di bidang olahraga.',
    },
]

interface ProgramItemProps {
    item: programsdata;
}

const ProgramItem: React.FC<ProgramItemProps & { index: number }> = ({ item, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: { duration: 1, delay: index * 0.3 }, // delay based on index
            });
        }
    }, [controls, inView, index]);

    return (
        <motion.div ref={ref} animate={controls} initial={{ x: 100, opacity: 0 }} className="bg-blue py-10 pr-12 pl-6 rounded-lg">
            <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                <Image src={item.imgSrc} alt={item.imgSrc} width={24} height={30} />
            </div>
            <h5 className="text-offwhite text-lg font-medium mb-4">{item.heading}</h5>
            <p className="text-lightblue text-sm font-normal">{item.subheading}</p>
        </motion.div>
    );
}

const Programs = () => {
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

    const controls2 = useAnimation();
    const controls3 = useAnimation();

    if (inView2) controls2.start({ y: 0, opacity: 1, transition: { duration: 1 } });
    if (inView3) controls3.start({ y: 0, opacity: 1, transition: { duration: 1 } });

    return (
        <>
            <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-6 relative" id="program-section">
                <div className="radial-bg hidden lg:block"></div>
                <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                    {/* Column-1 */}
                    <motion.div ref={ref3} animate={controls3} initial={{ y: -100, opacity: 0 }}>
                        <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">Program Unggulan</h3>
                        <h2 className="text-offwhite text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">Program Unggulan yang Menjadi Fondasi Berjalannya Organisasi</h2>
                        <p className="lg:text-lg font-normal text-bluish text-center md:text-start">Program yang menjadi fondasi dan esensi dalam berjalannya organisasi.</p>
                    </motion.div>
                    {/* Column-2 */}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56">
                        {programsdata.map((item, i) => (
                            <ProgramItem item={item} index={i} key={i} />
                        ))}
                    </div>

                </div>
            </div>
            <motion.div ref={ref2} animate={controls2} initial={{ y: 100, opacity: 0 }}>
                <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
            </motion.div>
        </>
    )
}

export default Programs;
