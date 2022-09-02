import React from 'react';
import Zoom from 'react-reveal/Zoom';

const AboutCard = () => {
  return (
   <div class="p-10">
    <Zoom top>
    <div class=" w-full lg:max-w-full lg:flex">
      <div class="lg:hidden flex h-72 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center">
        <img className="lg:h-50 lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://www.sefalana.com/data/0aa1883c6411f7873cb83dacb17b0afc.jpg"  alt="AboutUs"/>
      </div>
      <div class="border-r border-b border-l border-yellow lg:border-l-0 lg:border-t lg:border-yellow  bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class=" mb-8">
          <div class="text-darkBlue font-bold text-3xl mb-2">About Us</div>
          <p className="text-gray text-sm">
            Sefalana, Botswana’s Bountiful Granary came into existence in 1974 and was the first company to list on the Botswana Stock Exchange in 1979. We are proud to proclaim that to this day, after over 42 years of operation and an ever-changing business environment, our Group remains the only listed company without a controlling shareholder. This allows us to maintain our status as a truly Botswana company,
         made for the people of Botswana, by the people of Botswana.
As a Group, we are dedicated to our customers and to maximising return for our Shareholders, whilst at the same time improving the wellbeing of our employees, the people of Botswana and those in other regions where we are present. Each of our business units is driven by an experienced and empowered management team, supported and overseen by our Head Office. Our management principles and performance underpin the way in which we operate. Our staff compliment has increased considerably from just 233 people in 1974 to over 5,100 people in 2021, attesting Sefalana’s promise of sustainability and capability of being an employer of choice!
A promise we make to our stakeholders is to continue unlocking value to expand our capabilities and deliver....
1.the quality service and solutions requested by our customers,
2.a safe and conducive working environment for our people,
3.positive, sound returns for our investors and shareholders,
4.a trusted household name, a brand of choice for future generations,
5.transparency in the form of interactive communication and open access to information</p>
        </div>
      </div>
    </div>
    </Zoom>
  </div>
  )
}

export default AboutCard
