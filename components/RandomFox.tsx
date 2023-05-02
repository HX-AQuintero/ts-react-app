import { useRef, useEffect, useState, ImgHTMLAttributes } from "react";

type LazyImageProps = { 
  src: string, 
  alt: string,
  onLazyLoad?: (img: HTMLImageElement) => void;
 };

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

const INITIAL_IMAGE: string = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="

export const LazyImage = ({ 
  src,
  onLazyLoad,
  ...imgProps 
  }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [isLazyLoad, setIsLazyLoad] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(INITIAL_IMAGE);

  useEffect(() => {
    if(isLazyLoad){
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(!entry.isIntersecting || !node.current) {
          return;
        }
        
        setCurrentSrc(src);
        observer.disconnect();
        setIsLazyLoad(true);

        if(typeof onLazyLoad === 'function'){
          onLazyLoad(node.current);
        }
      })
    });
    if(node.current){
      observer.observe(node.current);
    }

    return () => {
      observer.disconnect()
    }
  }, [src, onLazyLoad, isLazyLoad]);

  return( 
    <img 
      ref={node} 
      src={currentSrc} 
      {...imgProps}
    />
    )
}

