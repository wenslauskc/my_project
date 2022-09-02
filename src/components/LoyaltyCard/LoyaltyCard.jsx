import React from 'react';
import Rotate from 'react-reveal/Rotate';

const LoyaltyCard = () => {
  return (
    <div className="relative top-10">
      <Rotate top left>
        <h1 className="text-darkBlue text-4xl font-bold p-5 text-center md:text-4xl font-bold xsm:text-4xl">Loyalty Rewards</h1>
        <p className="w-4/5 mx-auto text-gray pt-5 text-base font-bold first-letter:text-4xl tracking-wide"> 
             At Sefalane we believe our customers are more than just customers, they are family. That is why we embark on different initiatives
             to ensure that we reward and make you feel like you belong. Just like our mantra says "Sa Rona", Sefalane is for us all to benefit.
        </p>
        <a href="/"><img src="https://www.sefalana.com/data/f1572943357.jpg"  className="mx-auto pt-10 bottom-5 w-11/12"/></a>
      </Rotate>
    </div>
  )
}

export default LoyaltyCard;
