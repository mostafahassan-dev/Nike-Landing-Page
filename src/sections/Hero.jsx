import { useState } from 'react';
import { bigShoe1 } from '../assets/images';
import { Button, ShoeCard } from '../components';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants/constants';


function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id="home" className="w-full min-h-screen flex justify-center flex-col xl:flex-row gap-10 max-container">
     <div className="relative flex flex-col justify-center xl:w-2/5 items-start w-full max-xl:padding-x pt-28 ">
        <p className='text-coral-red text-xl font-montserrat'>
          Our Summer Collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text[72] max-sm:leading[82] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'> 
            The New Arrival
          </span>
          <br/>
          <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button 
          label = 'Shop Now'
          iconURL= {arrowRight}
        />
        <div className="flex justify-start flex-wrap items-start w-full mt-20 gap-16">
          {
            statistics.map((stat)=>(
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
            ))
          }
        </div>

     </div>
     <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center">
      <img
        src={bigShoeImg}
        alt='shoe colletion'
        width={610}
        height={502}
        className='object-contain relative z-10'
      />
      
      <div className=' flex absolute -bottom-[5%] sm:left-[10%] gap-4 sm:gap-6 max-sm:px-6'>
        {
          shoes.map((shoe,index)=>(
            <ShoeCard
              key={index}
              shoeURL={shoe}
              changeBigShoeImg = {(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            
            />
          ))
        }
      </div>


     </div>

    </section>
  )
}

export default Hero