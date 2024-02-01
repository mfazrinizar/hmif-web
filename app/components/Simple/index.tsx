'use client';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Simple = () => {
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
    const controls1 = useAnimation();

    if (inView1) {
        controls1.start({ y: 0, opacity: 1, transition: { duration: 1 } });
    }

    return (
        <div className="simple-bg relative">
            <div className="simpleone"></div>
            <div className="simpletwo"></div>
            <div className="simplethree"></div>
            <div className="simplefour"></div>
            <div className="simplefive"></div>
            <div className="mx-auto max-w-5xl py-24 px-6">
            <motion.div ref={ref1} animate={controls1} initial={{ y: 100, opacity: 0 }}>
                <h3 className="text-center text-offwhite text-3xl lg:text-5xl font-semibold mb-6">Mari Bergabung dalam HMIF UNSRI</h3>
                <p className="text-center text-bluish text-lg font-normal mb-8">HMIF UNSRI adalah organisasi kemahasiswaan yang bergerak di bidang teknologi informasi, yang bertujuan untuk meningkatkan kualitas akademik, non-akademik, dan kekeluargaan mahasiswa Teknik Informatika FASILKOM UNSRI, serta berkontribusi untuk pengembangan ilmu pengetahuan dan teknologi di Indonesia.</p>
            </motion.div>
                {/* <div className="flex justify-center ">
                    <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton'>Test Button</button>
                </div> */}
            </div>
            <div className="simplesix"></div>
            <div className="simpleseven"></div>
            <div className="simpleeight"></div>
            <div className="simplenine"></div>
            <div className="simpleten"></div>
        </div>
    )
}

export default Simple;
