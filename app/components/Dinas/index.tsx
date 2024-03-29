"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface dinasdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const dinasdata: dinasdata[] = [
    {
        imgSrc: '/images/Dinas/icon-one.svg',
        heading: 'Dinas Akademik',
        subheading: 'Dinas Akademik merupakan dinas paling gacor.',
        hiddenpara: 'Dinas ini bertanggung jawab untuk memfasilitasi dan mendukung kegiatan akademik, seperti mentoring, seminar, pengembangan web, dan lainnya.',
    },
    {
        imgSrc: '/images/Dinas/icon-one.svg',
        heading: 'Dinas KOMINFO',
        subheading: 'Dinas KOMINFO bertanggung jawab untuk mengelola dan menyebarkan informasi terkait kegiatan dan program.',
        hiddenpara: 'Dinas ini juga mengelola media dan platform komunikasi, seperti website, media sosial, dan aplikasi mobile.',
    },
    {
        imgSrc: '/images/Dinas/icon-one.svg',
        heading: 'Dinas PSDM',
        subheading: 'Dinas PSDM berfokus pada pengembangan sumber daya manusia dalam organisasi.',
        hiddenpara: 'Dinas ini mengelola rekrutmen, pelatihan, dan pengembangan keterampilan anggota organisasi.',
    },
    {
        imgSrc: '/images/Dinas/icon-one.svg',
        heading: 'Dinas Administrasi',
        subheading: 'Dinas Administrasi mengelola tugas administratif dan operasional organisasi.',
        hiddenpara: 'Dinas ini bertanggung jawab untuk pencatatan, dokumentasi, dan pengelolaan sumber daya organisasi.',
    },
    {
        imgSrc: '/images/Dinas/icon-one.svg',
        heading: 'Dinas Kastrad',
        subheading: 'Dinas Kastrad bertanggung jawab untuk strategi dan perencanaan dalam organisasi.',
        hiddenpara: 'Dinas ini mengelola perencanaan strategis, analisis, dan evaluasi program dan kegiatan.',
    },
    {
        imgSrc: '/images/Dinas/icon-one.svg',
        heading: 'Dinas PMB',
        subheading: 'Dinas PMB mengelola kegiatan penerimaan mahasiswa baru dan orientasi.',
        hiddenpara: 'Dinas ini bertanggung jawab untuk menyambut dan mengintegrasikan mahasiswa baru ke dalam komunitas.',
    },
    {
        imgSrc: '/images/Dinas/icon-one.svg',
        heading: 'Dinas KWU',
        subheading: 'Dinas Kewirausahaan berfokus pada pengembangan dan inovasi kewirausahaan.',
        hiddenpara: 'Dinas ini mengelola program dan kegiatan yang mendukung kewirausahaan dan inovasi bisnis di kalangan mahasiswa.',
    },

]

interface DinasItemProps {
    item: dinasdata;
    index: number;
}

const DinasItem: React.FC<DinasItemProps> = ({ item, index }) => {
    const variants = {
        hidden: { opacity: 0, x: -250 },
        show: { opacity: 1, x: 0 },
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            className='card-b p-8 my-dinas-motion-div'
            key={index}
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}

        >
            <div className='dinas-img-bg rounded-full flex justify-center absolute p-6'>
                <Image src={item.imgSrc} alt={item.imgSrc} width={44} height={44} />
            </div>
            <div>
                <Image src={'/images/Dinas/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
            </div>
            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{item.heading}</h3>
            <p className='text-base font-normal text-bluish text-center mt-2'>{item.subheading}</p>
            <span className="text-base font-normal m-0 text-bluish text-center hides">{item.hiddenpara}</span>
        </motion.div>
    );
}

const Dinas = () => {
    const variantsA = {
        hidden: { scale: 0.75 },
        visible: { scale: 1 },
    }, variantsB = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative pt-28' id="dinas-section">
                <div className="radial-bgone hidden lg:block"></div>
                <motion.div
                    className='text-center mb-14 my-motion-div'
                    variants={variantsA}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0 }}
                >
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Dinas</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>HMIF UNSRI memiliki 7 dinas yang masing-masing berkontribusi dalam keberlanjutan organisasi.</p>
                </motion.div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>
                    {dinasdata.map((item, index) => (
                        <DinasItem item={item} key={index} index={0} />
                    ))}
                </div>
            </div>
            <div ref={ref}>
                {inView && (
                    <motion.div
                        className='my-motion-div'
                        variants={variantsB}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0 }}
                    >
                        <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} className="md:mb-40 md:-mt-6" />
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default Dinas;
