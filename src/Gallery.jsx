import React from 'react'
import './Imaggallery.css'
import img1 from '../assets/img.jpg';
import img2 from '../assets/img.jpg';
import img3 from '../assets/img.jpg';
import img4 from '../assets/img.jpg';
import img5 from '../assets/img.jpg';
import img6 from '../assets/img.jpg';
import img7 from '../assets/img.jpg';
import img8 from '../assets/img.jpg';

const Gallery = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <>
      <div className="imagegallery" >
        <h1>Imagegallery</h1>
        <div className="imagegallery-container">
          {images.map((img,ind) => (
              <img key={ind} src={img} alt={`image: ${ind+1}`} />
          ))}
        </div>
       
      </div>
       
    </>
   
  )
}

export default Gallery 