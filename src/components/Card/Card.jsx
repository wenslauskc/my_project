import React from 'react';
import Fade from 'react-reveal/Fade';

const Card = ({ tag, product, image, weight }) => {
  return (
        <div className="container mx-auto mt-5">
            <Fade right>
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
               <div className="card">
                    <div className="d-flex bg-white justify-content-between p-3 shadow-2xl rounded-md xsm:w-92">
                        <img src= { image } className="w-65 h-65 object-cover"  alt="gifts"/>
                        <div className="px-4 py-3 w-full">
                            <span className="text-yellow mr-3 uppercase text-xs">{ tag }</span>
                            <p className="text-lg font-bold text-black truncate block-capitalize">{ product }</p>
                            <div className="flex items-center">
                                <p className="">{ weight }</p>   
                                <div className="ml-auto">
                                    <a href="/">
                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 
                                            7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 
                                            2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75
                                             0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16
                                              16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z">
                                              </path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </div>
        </Fade>
        </div>
  )
}

export default Card
