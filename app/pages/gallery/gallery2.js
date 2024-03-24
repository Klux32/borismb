"use client"
import 'photoswipe/dist/photoswipe.css'
// import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css'
// import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'

import { Gallery, Item } from 'react-photoswipe-gallery'

import { Container, Heading } from '../../compoenents/containers/containers';

import Image from 'next/image';
import { imagesData } from './imagesData';

// import img7 from "../../../public/img-7.jpg";
// import img8 from "../../../public/img-20.jpg";

const Gallery2 = () => {

      const options = {
        arrowPrev: true,
        arrowNext: true,
        zoom: false,
        close: true,
        counter: true,
        // bgOpacity: 1,
        padding: { top: 20, bottom: 40, left: 100, right: 100 },
      }

    console.log(imagesData)
    return(
        <div id='galleryContent'>
      <Container>
      <Heading>Projekti</Heading>
  <Gallery options={options}>
    <div className='row justify-content-center'>
    {
              imagesData.map((item,key)=>(
                  <Item
                  key={key}
                  original={item.src.src}
                  thumbnail={item.src.src}
                  width={item.width}
                  height={item.height}
                >
                {({ ref, open }) => (
                    <div className=' mb-4 col-6 col-sm-4 col-lg-3'>
                        <Image alt='' style={{height:"150px", width:"100%"}} width={item.width} height={item.height} ref={ref} onClick={open} src={item.src.src} />
                    </div>
                )}
              </Item>
              ))
          }
          </div>
  </Gallery>
  </Container>
  </div>
)}

export default Gallery2;