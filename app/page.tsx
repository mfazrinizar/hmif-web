import Banner from './components/Banner/index';
import Sponsors from './components/Sponsors/index';
import Dinas from './components/Dinas/index';
// import Table from './components/Table/index';
import Programs from './components/Programs/index';
import Simple from './components/Simple/index';
import Faq from './components/Faq/index';


export default function Home() {
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
