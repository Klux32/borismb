"use client"
import React, {useEffect} from 'react'

import Image from 'next/image';
import { imagesData } from './imagesData';
import { Container, Heading } from '../../compoenents/containers/containers';

const Gallery = () => {

    useEffect(()=>{

    

        const elApp = document.querySelector("#galleryApp");

        const elImages = Array.from(document.querySelectorAll(".gallery-image"));

        const elDetail = document.querySelector(".detail");


        function flipImages(firstEl, lastEl, change) {
            const firstRect = firstEl.getBoundingClientRect();
          
            const lastRect = lastEl.getBoundingClientRect();
          
            // INVERT
            const deltaX = firstRect.left - lastRect.left;
            const deltaY = firstRect.top - lastRect.top;
            const deltaW = firstRect.width / lastRect.width;
            const deltaH = firstRect.height / lastRect.height;
          
            change();
            lastEl.parentElement.dataset.flipping = true;
          
            const animation = lastEl.animate([
              {
                transform: `translateX(${deltaX}px) translateY(${deltaY}px) scaleX(${deltaW}) scaleY(${deltaH})`
              },
              {
                transform: 'none'
              }
            ], {
              duration: 600, // milliseconds
              easing: 'cubic-bezier(.2, 0, .3, 1)'
            });
          
            animation.onfinish = () => {
              delete lastEl.parentElement.dataset.flipping;
            }
          
          }
          
          elImages.forEach(figure => {
          
            figure.addEventListener("click", () => {
              const elImage = figure.querySelector('img');
          
              elDetail.innerHTML = "";
          
              const elClone = figure.cloneNode(true);
              elDetail.appendChild(elClone);
          
              const elCloneImage = elClone.querySelector('img');
          
              flipImages(elImage, elCloneImage, ()=>{
                elApp.dataset.state="detail";
              });
          
              function revert(){
          
                flipImages(elCloneImage, elImage, ()=>{
                  elApp.dataset.state="gallery";
                  elDetail.removeEventListener('click',revert);
                });
          
              }
          
              elDetail.addEventListener('click',revert);
          
            });
          });

},[])



  return (
    <div id='galleryContent'>
      <Container>
      <Heading>Projekti</Heading>

      <a href="https://youtu.be/9cYVDKmS7r8" target="_blank" data-keyframers-credit style={{color: "#FFF"}}></a>
      {/* <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script> */}

      <div id="galleryApp" data-state="gallery">
        <div className="gallery flex-row align-items-stretch justify-content-center">
          {/* <!-- figure.gallery-image*30>img[src="https://source.unsplash.com/collection/2022043/700x900/?=$$"]+figcaption --> */}
          
          {
              imagesData.map((item,key)=>(
                  <figure key={key} className="gallery-image align-self-center">
                    <Image src={item.src} alt={item.alt} width={item.width} height={item.height} />
                    <figcaption></figcaption>
                  </figure>
              ))
          }

        </div>
        <div className="detail">
          {/* <!--   cloned figure/image goes here!   --> */}
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Gallery