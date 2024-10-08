import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import Head from 'next/head';


export const metadata = {
  title: 'HMIF UNSRI',
  description: 'Situs web resmi HMIF UNSRI',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}
