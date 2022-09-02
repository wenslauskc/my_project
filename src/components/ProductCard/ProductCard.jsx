import React from 'react';
import Zoom from 'react-reveal/Zoom';
import ShoppingBag from '../../assets/shopping-bag.png'; 
import Liquor from '../../assets/liquor.png'; 
import Remittances from '../../assets/debit-card.png'; 

const ProductCard = () => {
  return (
    <>
    <div className="flex flex-wrap pt-20 w-full py-6 bg-yellow-50 flex items-center justify-around">
        <Zoom bottom>
      <div className="bg-white w-72 h-96 shadow-md rounded m-3">
        <div className="h-3/4 w-full">
            <img 
            className="w-full h-full object-cover rounded-t"
            src= { ShoppingBag } alt="Groceries"/>
        </div>
        <div className="w-full h-1/4 p-3">
            <a href="/" className="hover:text-text-yellow-600 text-gray">
                <span className="text-lg font-semibold uppercase tracking-wide">
                    Groceries
                </span>
            </a>
        </div>
      </div>

      <div className="bg-white w-72 h-96 shadow-md rounded m-3">
        <div className="h-3/4 w-full">
            <img 
            className="w-full h-full object-cover rounded-t"
            src={ Liquor } alt="liquor"/>
        </div>
        <div className="w-full h-1/4 p-3">
            <a href="/" className="hover:text-text-yellow-600 text-gray">
                <span className="text-lg font-semibold uppercase tracking-wide">
                    Liquor
                </span>
            </a>
        </div>
      </div>

      <div className="bg-white w-72 h-96 shadow-md rounded m-3">
        <div className="h-3/4 w-full">
            <img 
            className="w-full h-full object-cover rounded-t"
            src={ Remittances } alt="Remittances"/>
        </div>
        <div className="w-full h-1/4 p-3">
            <a href="/" className="hover:text-text-yellow-600 text-gray">
                <span className="text-lg font-semibold uppercase tracking-wide">
                    Remittance Services
                </span>
            </a>
        </div>
      </div>
      </Zoom>
    </div>
    <div className="flex space-x-2 justify-center">
    <button type="button" className="in-line-block px-6 py-4 bg-darkBlue text-white font-medium text-xs  leading-tight uppercase rounded shadow-md ">Visit Store</button>
    </div>
    </>
  )
}

export default ProductCard
