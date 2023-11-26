import { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes,statistics } from '../constants';
import { bigShoe1 } from '../assets/images'; 
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [bigShoeImg,setBigShoeImg] = useState(bigShoe1);
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  p-2'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className=' relative z-10 pr-10'>Jaya Swarna Lalitha</span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Milk Products</span> 
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and ultra-lightweight shoes.
        </p>
        <Button label= "Shop now" iconURL = {arrowRight}/>

      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="shoe collection" width ={610} heigth={500} className="object-contain relative z-10" />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard 
                imgURL = {shoe}
                changeBigShoeImage = {(shoe)=>setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
