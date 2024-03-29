"use client"
import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface faqdata {
    heading: string;
    subheading: string;
}

const faqdata: faqdata[] = [
    {
        heading: "1. Apa itu HMIF UNSRI?",
        subheading: 'HMIF UNSRI adalah organisasi kemahasiswaan yang bergerak di bidang teknologi informasi dan kemahasiswaan, yang bertujuan untuk meningkatkan kualitas akademik, nonakademik, dan kekeluargaan mahasiswa Teknik Informatika FASILKOM UNSRI, serta berkontribusi untuk pengembangan ilmu pengetahuan dan teknologi di Indonesia.'
    },
    {
        heading: "2. Bagaimana cara masuk HMIF UNSRI?",
        subheading: 'Daftar.'
    },
    {
        heading: "3. Apa peran nyata HMIF UNSRI dalam kemahasiswaan?",
        subheading: 'Pake nanya.'
    },

]

const FaqItem = ({ item }: { item: faqdata }) => {

    const { ref, inView } = useInView({ triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                y: 0,
                opacity: 1,
                transition: { duration: 0 }
            });
        }
    }, [controls, inView]);

    return (
        <motion.div ref={ref} animate={controls} initial={{ y: -100, opacity: 0 }} className='my-motion-div'>
            <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                                <span>{item.heading}</span>
                                <ChevronUpIcon
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">{item.subheading}</Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </motion.div>
    );
}

const Faq = () => {

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.1, });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.1, });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.1, });

    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();

    useEffect(() => {
        if (inView1) {
            controls1.start({
                y: 0,
                opacity: 1,
                transition: { duration: 0 }
            });
        }
    }, [controls1, inView1]);

    useEffect(() => {
        if (inView2) {
            controls2.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0 }
            });
        }
    }, [controls2, inView2]);

    useEffect(() => {
        if (inView3) {
            controls3.start({
                y: 0,
                opacity: 1,
                transition: { duration: 0 }
            });
        }
    }, [controls3, inView3]);

    return (
        <div className="my-20 px-6 pt-28" id="faq-section">
            <motion.h3 ref={ref1} animate={controls1} initial={{ y: -100, opacity: 0 }} className="text-center text-3xl lg:text-5xl font-bold text-offwhite mb-3">Frequently Asked Questions</motion.h3>
            <motion.p ref={ref1} animate={controls1} initial={{ y: -100, opacity: 0 }} className="text-center lg:text-lg font-normal text-bluish">Daftar pertanyaan dan jawaban yang sering muncul.</motion.p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">
                    {/* Column-1 */}

                    <div className="w-full px-4 pt-16">
                        {faqdata.map((item, i) => (
                            <FaqItem item={item} key={i} />
                        ))}
                    </div>


                    {/* Column-2 */}
                    <motion.div ref={ref3} animate={controls3} initial={{ y: 100, opacity: 0 }} className="mt-32 my-motion-div">
                        <Image src={'/images/Faq/faq.svg'} alt="faq-image" width={941} height={379} />
                    </motion.div>

                </div>
            </div>
            <motion.div ref={ref2} animate={controls2} initial={{ y: 100, opacity: 0 }} className='my-motion-div'>
                <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
            </motion.div>
        </div>
    )
}

export default Faq;
