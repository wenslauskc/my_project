import React from 'react';
import Fade from 'react-reveal/Fade';

const ImageCard = () => {
  return (
    <div className="relative top-10 bg-lighterBlue">
      <Fade left>
        <h1 className="text-darkBlue p-5 text-center md:text-5xl font-bold xsm:text-4xl">Sefalane Group Welcomes You</h1>
        <a href="https://www.sefalane.com/p/mobile-app/"><img src="https://www.sefalana.com/data/f1572943242.jpg"  className="mx-auto top-12 bottom-5 w-11/12"/></a>
      </Fade>
    </div>
  )
}

export default ImageCard
