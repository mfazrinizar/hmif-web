'use client';
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// MIDDLE LINKS DATA
interface LinkType {
  name: string;
  href: string;
}

interface ProductType {
  id: number;
  section: string;
  link: LinkType[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Tautan Kami",
    link: [
      { name: 'Home', href: '#home-section' },
      { name: 'Dinas', href: '#dinas-section' },
      { name: 'Program Unggulan', href: '#program-section' },
      { name: 'FAQ', href: '#faq-section' },
    ],
  }
]

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/insta.svg', href: "https://instagram.com/mfazrinizar" },
  { imgsrc: '/images/Footer/github.svg', href: "https://github.com/mfazrinizar" },
  { imgsrc: '/images/Footer/linkedin.svg', href: "https://linkedin.com/in/mfazrinizar" },
]


const Footer = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <motion.div
      className="relative"
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.75 }
      }}
    >
      <div className="radial-bg hidden lg:block"></div>
      <div className="mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}

          <div className='col-span-6'>
            <Image
              className="block h-12 w-20px mb-4"
              src="/images/Logo/logo.png"
              alt="HMIF-Logo"
              width={48}
              height={48}
            />
            <h3 className='text-lightblue text-sm font-normal leading-9 mb-4 lg:mb-16'> HMIF UNSRI adalah organisasi kemahasiswaan yang bergerak di bidang teknik informatika, yang bertujuan untuk meningkatkan kualitas akademik, non-akademik, dan kekeluargaan mahasiswa Teknik Informatika FASILKOM UNSRI, serta berkontribusi untuk pengembangan ilmu pengetahuan dan teknologi di Indonesia.</h3>
            <div className='flex gap-4'>
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i}>
                  <Image
                    src={items.imgsrc}
                    alt={items.imgsrc}
                    className='footer-icons'
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: { name: string, href: string }, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href={link.href} className="text-offwhite  text-sm font-normal mb-6 space-links">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
            <h3 className="text-white text-xl font-medium mb-9">Kontak Kami</h3>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/Footer/insta.svg'} alt="insta-icon" width={20} height={20} />
              <a href="https://www.instagram.com/hmif.unsri" target="_blank" rel="noopener noreferrer">hmif.unsri</a>
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} />
              <a href="mailto:hmif.unsri@gmail.com">hmif.unsri@gmail.com</a>
            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
              <Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />
              <a href="https://www.google.com/maps/search/?api=1&query=Indralaya" target="_blank" rel="noopener noreferrer">Indralaya</a>
            </h4>
          </div>

        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-offwhite'>@2024 - <Link href="https://mfazrinizar.github.io/" target="_blank"> M. Fazri Nizar</Link></h3>
      </div>
    </motion.div>
  )
}

export default Footer;
