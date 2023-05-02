import Head from 'next/head'
import { MouseEventHandler, useState } from 'react';
import { LazyImage } from '../components/RandomFox';
import { PageContent } from '../components/PageContent'

const random = (): number => Math.floor(Math.random() * 123) + 1;

const generateId = () => Math.random().toString(36).substring(2, 9);

const Home = () => {

  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> =  () => {

    const newImageItem: ImageItem = {
      id: generateId(), 
      url: `https://randomfox.ca/images/${random()}.jpg`
    };
    setImages([...images, newImageItem]);
    
  };

  return (
    <div className=''>
      <Head>
        <title>React Proj</title>
        <script
          defer
          data-domain="yourdomain.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <main className="text-center">
        <PageContent />
        <div className="m-4">
          <button 
            onClick={addNewFox}
            className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add new fox
          </button>
        </div>

        {images.map(({ id, url }, index) => (
          <div key={id} className="p-4">
            <LazyImage 
              alt="img not found" 
              src={url} 
              width={320} 
              height="auto" 
              className="mx-auto rounded-md bg-gray-300 shadow-lg p-4"
              onClick={() => console.log(`click en el índice ${index}`)}
              onLazyLoad={img => {
                console.log(`Image #${index + 1} is ready. Node:`, img);
              }}
            />
          </div>
        ))}
      </main>
    </div>
  )
}

export default Home;