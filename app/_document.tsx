import Image from 'next/image';

const Loader = () => (
  <div id="globalLoader">
    <Image
      src="/loading_icon.gif"
      alt="Loading"
      width={256} 
      height={256} 
    />
  </div>
);

export default Loader;