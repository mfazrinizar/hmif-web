'use client';
import { useEffect } from 'react';

import Banner from './components/Banner/index';
import Sponsors from './components/Sponsors/index';
import Dinas from './components/Dinas/index';
// import Table from './components/Table/index';
import Programs from './components/Programs/index';
import Simple from './components/Simple/index';
import Faq from './components/Faq/index';


export default function Home() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: 0,
  //       left: 0,
  //       behavior: 'instant' as any,
  //     })
  //   }, 0);
  // },);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
    }
  }, []);


  return (
    <main>
      <Banner />
      <Dinas />
      {/* <Table /> */}
      <Programs />
      <Simple />
      <Faq />
      <Sponsors />
    </main>
  )
}
