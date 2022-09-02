import React, { Fragment, useState} from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import logo from '../../assets/logo.png';

const Navbar = () => {
const [nav, setNav] = useState(false);
const [open, setOpen] = useState(0);

const handleClick = () => setNav(!nav);

const handleOpen=(value) => {
    setOpen(open === value ? 0 : value);
};

  return (
    <div>
<nav className='w-screen z-10 fixed top-0 bg-white '>
    <div className="w-full h-full flex justify-between items-center">
        <div className='flex flex-row pl-[7px]'>
        <img src={logo} alt="Logo" className='w-[90px] h-[50px] ml-5 md:w-[150px] md:h-[50px] xsm:w-[160px] xsm:h-[60px]'/>
        </div>
         <ul className="hidden md:hidden lg:flex pr-[30px] text-lightBlue text-sm font-bold items-center space-x-10 cursor-pointer">
            <li className='text-darkBlue'>HOME</li>
            <li className='hover:text-darkBlue'>CORPORATE</li>
            <li className='hover:text-darkBlue'>BOARD OF DIRECTORS</li>
            <li className='hover:text-darkBlue'>TEAM</li>
            <li className='hover:text-darkBlue'>CONTACT</li>
         </ul>

        <div className="xlarge:hidden" onClick={handleClick}>
            {!nav ? <MenuIcon className='w-9 text-darkBlue m-2' /> : <XIcon className='w-9 text-darkBlue m-2'/>}
        </div>
    </div>
    <ul className={!nav ? 'hidden' : 'absolute w-full h-[300px] px-[10px] bg-darkBlue font-roboto text-lg animate-scale_up_tr md:text-white md:h-[100vh] xsm:text-white xsm:h-[100vh] xlarge:hidden'}>
         <Fragment>
        <Accordion open={open === 1} onClick={() => handleOpen(1)}>
        <li className='w-full p-[10px]'>  
            <AccordionHeader className="text-xl">
            About  
            </AccordionHeader> 
            <AccordionBody> 
           <ul className="text-base ml-5">   
                <li className="p-[10px]">About Us</li>
                <li className="p-[10px]">Mission & Vision</li>
                <li className="p-[10px]">Core Purpose & Values</li>
                <li className="p-[10px]">History</li>          
            </ul>  
             </AccordionBody>    
        </li>
       </Accordion>
       <Accordion open={open === 2} onClick={() => handleOpen(2)}>
        <li className='w-full p-[10px]'>
            <AccordionHeader className="text-xl">
            Corporate 
            </AccordionHeader>
            <AccordionBody>
           <ul className="text-base ml-5">
                <li className="p-[10px]">Corporate Strategy</li>
                <li className="p-[10px]">Business Model</li>
                <li className="p-[10px]">Botswana Stock Exchange</li>
                <li className="p-[10px]">Annual Report</li>
                <li className="p-[10px]">CSR</li>
            </ul> 
            </AccordionBody>    
        </li>
       </Accordion>
       <Accordion open={open === 3} onClick={() => handleOpen(3)}>
        <li className='w-full p-[10px]'>
            <AccordionHeader className="text-xl">
            Sefalane Trading
            </AccordionHeader>
            <AccordionBody> 
           <ul className="text-base ml-5">
                <li className="p-[10px]">Rewards</li>
                <li className="p-[10px]">Sefalane Proporties</li>
                <li className="p-[10px]">Sefalane Fresh Produce</li>
                <li className="p-[10px]">FB Beverages</li>
                <li className="p-[10px]">FB Milling</li>
                <li className="p-[10px]">FB Milling</li>
            </ul> 
            </AccordionBody>     
        </li>
        </Accordion>
        <Accordion open={open === 4} onClick={() => handleOpen(4)}>
        <li className='w-full p-[10px]'>
            <AccordionHeader className="text-xl">
            Countries
            </AccordionHeader>
            <AccordionBody> 
          <ul className="text-base ml-5">
                <li className="p-[10px]">Botswana</li>
                <li className="p-[10px]">South Africa</li>
                <li className="p-[10px]">Namibia</li>
                <li className="p-[10px]">Lesotho</li>
                <li className="p-[10px]">Australia</li>
            </ul>
            </AccordionBody> 
        </li>
        </Accordion>
        </Fragment>
    </ul>
</nav>
<nav className="lg:w-screen z-10 mt-[-17px] fixed bg-darkBlue">
    <div className="lg:py-4 px-3 mx-auto max-w-screen-xl ">
        <div className="flex items-center">
            <ul className="hidden md:hidden lg:flex justify-between mt-0 mr-6 space-x-8 text-sm font-medium cursor-pointer">
                <li>
                    <a hre="/" className="text-white hover:text-yellow">Sefalane Trading</a>
                </li>
                <li>
                    <a hre="/" className="text-white hover:text-yellow">Sefalane Fresh Produce</a>
                </li>
                <li>
                    <a hre="/" className="text-white hover:text-yellow">Sefalane Lesotho</a>
                </li>
                <li>
                    <a hre="/" className="text-white hover:text-yellow">Metro Namibia</a>
                </li>
                <li>
                    <a hre="/" className="text-white hover:text-yellow">Commercial Motors</a>
                </li>
                <li>
                    <a hre="/" className="text-white hover:text-yellow">Food Botswana</a>
                </li>
                <li>
                    <a hre="/" className="text-white hover:text-yellow">KSI</a>
                </li>
                <li>
                    <a hre="" className="text-white hover:text-yellow">Australia</a>
                </li>
            </ul>
        </div>
    </div>

</nav>
</div>
  )
}

export default Navbar;