import React from 'react';
import CountUp from 'react-countup';
import Bounce from 'react-reveal/Bounce';

function CountUpCard() {
  return (
  <div className="flex items-center justify-center min-h-screen bg-white pt-40">
    <Bounce bottom>
    <div className="flex flex-col">
        <div className="flex flex-col mt-8">     
            <div className="container max-w-7xl px-4">         
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-6/12 px-4">                       
                        <h1 className="text-darkBlue text-4xl font-bold mb-8">
                            Sefalane Group</h1>                       
                        <p className="text-gray text-lg font-bold first-letter:text-4xl">
                            Your basket of opportunities. With pride and honor we continue expanding and serving you in different Regions.
                        </p>
                    </div>
                </div>        
                <div className="flex flex-wrap">                
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">                      
                            <a href="/" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAAGFBMVEV1qtsAAAD///97rt3Nzc339/fw9fttptlq8HBnAAAApklEQVR4nO3bsRHCAAADMZNAsv/G2eDvqKCQRvja3gAAAAAAAAAAAAAAAAAAAAAAgK+dhB0EeZI8SZ4kT5InyZP2JuxFkCfJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxJniRPkifJk+RJ8iR5kjxpH4J1WJInyZPkSfIkedIuwm7Cr992AAAAAAAAAAAAAAAAAAAAAAD8qQfAWVudR0FnKQAAAABJRU5ErkJggg==" alt="Botswana Flag"/>
                            </a>    
                            <div className="text-center mt-6">     
                                <h1 class="text-lightBlue text-xl font-bold mb-1">
                                    Botswana
                                </h1>
                                <div className="text-gray-700 font-light mb-2">
                                    <CountUp className="text-4xl font-bold" delay={ 3 } end={264} />
                                    <h2 className="text-gray font-bold">Stores</h2>
                                </div>       
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">         
                            <a href="/" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="data:image/png;base64,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"
                                    alt="South Africa Flag" />
                            </a>      
                            <div className="text-center mt-6">        
                                <h1 className="text-[#ff0000] text-xl  font-bold mb-1">
                                    South Africa
                                </h1>        
                                <div className="text-gray-700 font-light mb-2">
                                    <CountUp className="text-4xl font-bold" delay={ 5 } end={22} />
                                    <h2 className="text-gray font-bold">Stores</h2>
                                </div>        
                            </div>
                        </div>
                    </div>    
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">     
                            <a href="/" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="data:image/png;base64,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" 
                                    alt="Namibia Flag"/>
                            </a>
                            <div className="text-center mt-6">      
                                <h1 className="text-[#009A44] text-xl font-bold mb-1">
                                    Namibia
                                </h1> 
                                <div className="text-gray-700 font-light mb-2">
                                   <CountUp className="text-4xl font-bold" delay={ 7 } end={9} />
                                    <h2 className="text-gray font-bold">Stores</h2>
                                </div>        
                            </div>
                        </div>
                    </div>   
                    <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                        <div className="flex flex-col">            
                            <a href="/" className="mx-auto">
                                <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAhFBMVEX///8AFIkAmkQAAAAAD4gOnkwPH44hISHi4uL5+fk4ODjr6+v29vbl5eWjo6PDw8MzMzM+Pj7X19dxcXFra2vPz8+Pj49fX19WVlavr6+dnZ0QEBBISEhOTk58fHzZ2dmHh4e4uLgrKyuqqqoZGRlCQkKKioptbW0dHR1jY2MTExMtLS12vfjTAAAEwElEQVR4nO2bXWOiSBBFma3ZFQRBRVGMosYkM8b///+2u0FFrsk6DzOVpe95CISnykl3dfVX8I10CbQD+ILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gwXfSJfiHdAkI+V8Ragfw5ZiKyFQ7iK9EnOZiydNYO5QvQjKTKz9oxTCXW+baAenjlFTTgfk5mFaUYkiMhInpL86JySwT80y0g1LGJNeTfTZOgmBsUq1uSNqMjApXmFychOZlpBuUMsW5VVyc2JZTaIakzvBcqV2dmKQ71AxJm1jkqX67OgmeRHwuUkybWNZvLSdLv4fj8pI7Wk5Mjin1QlInFVnVb6bDnLvRSiTVC0md9Pznr11Zv7796CfndrJu5jqv9hfP20mTT14vE0ArxfN8konMgmjYmhWPo2AmkmkHpsjI1mdJOIrHtZB4FCZ2xuNzcW9nxZF9qZvK8PzN65nxRGRrny0nW5GJblDK7JoxpuXEjEU71Zi0MUl2Y58tJxu/U+w1eVydeJ9OgmAhsg/c6poddwJXsiy0g1Jm7zpP2VQnpes6e+2glImMiXh0KdlG8Xl09plK5O1ayA7NQFRph6ROKF24mW6z7A2+Z1hL1nHid3FSc+o4edYOSJ8fkE9m2iFpcwAlIgftoHTZ3lHSTJV9JRrcdTLwuWo73lUictQOTI/0AyUeL9zfTyY1np6BjF4+cfLuZ0rpFvW3eFnif5xMalbaAf55PksmNd5VKdF/KvFvbWn5gJOldpB/ltUDSjxLKd3z5B/h0Rmu5OlBJ09+7PRE8WPJpMaklLj/qbaUXfGwEpHizYMDOvdXBz5joB3y72b/y0r6vy84/jUdi4PU28g9xm5cPIus04e60C6uZ4r93t6wJxznE1u2b/PPfYw39XlZO0a9aof9O7E3Ztd2rd4uzZv3anJfyDKL3bmuWZCLbVF9XmGy//SiONWnb3KnJrRrBotxU8VVu3Se1itKid1Z30hpa94ez3ya/fLctIDU7XX9tF/XrTs82+bDxh4TtWNUXqfl/u6ru4vEz1mdaYswt8Ps1OYVe9Axti8v5rlxDUZeEndU5+DOnfd2b/By9MZemQ1csxmbpLsyPSpLzLf0aHqWaRxZKM19hOtt7N6eIs5aKbWMXHp5zdyS24uxkdhrXyLHxO2YnpL57jJgT/o8Gs9b079lumo6halBFm4GfGgKtGQtLZZ9XzIId+83w25RzuNpc8IismdC31bH9qWE911/82uLbCbIaTg8/YSvsz53mluirPpsw6tpIVXmx5LSlbCsPp70DKrSiy5zh2S7L/Lb+n6SF/utb+3jHlE8CsNw5MEyI+kRf5MuwV+kC50gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0gdILQCUInCJ0g/wLcQvHmkCs2LgAAAABJRU5ErkJggg==" 
                                    alt="Lesotho Flag"/>
                            </a>     
                            <div className="text-center mt-6">       
                                <h1 className="text-darkBlue text-xl font-bold mb-1">
                                    Lesotho
                                </h1>   
                                <div className="text-gray-700 font-light mb-2">
                                   <CountUp className="text-4xl font-bold" delay={ 9 } end={5} />
                                    <h2 className="text-gray font-bold">Stores</h2>
                                </div>          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Bounce>
</div>

  )
}

export default CountUpCard;
