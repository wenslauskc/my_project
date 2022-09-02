import React from 'react';
import { Navbar, Carousel, Fab, ImageCard, Card, CardData, Footer, CountUpCard, LoyaltyCard, ProductCard, AboutCard, HistoryCard  } from './components';
import './index.css';

const App = () => {
  return (
    <div>
       <Navbar />
       <Carousel />
       <ImageCard />   
       <Fab /> 
       <div className="flex">
       <h2 className="text-3xl font-bold ml-2 mt-20 text-left text-darkBlue">House Astra Brand</h2>
       <p className="ml-auto mr-5 mt-20">
        <a href="/" className="lg:flex text-blue text-sm font-bold xsm:hidden">
          View All<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
                  </path>
          </svg>
        </a></p>
       </div>
       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">  
         {CardData.map((card, index) => {
            return (
             <Card key={card.id} {...card} />
            );
      })}
      </section>
      <p className="mr-auto ml-5 mt-20">
        <a href="/" className="xsm:flex text-blue text-xl font-bold lg:hidden">
          View All<svg aria-hidden="true" class="ml-2 -mr-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
                  </path>
          </svg>
        </a></p>
      <CountUpCard />
      <LoyaltyCard /> 
       <h1 className="text-darkBlue text-4xl font-bold mt-[130px] text-center md:text-4xl font-bold xsm:text-4xl">In-store Offers</h1>
      <ProductCard /> 
      <AboutCard />
      <HistoryCard />
       <Footer />    
    </div>
  )
}

export default App;
