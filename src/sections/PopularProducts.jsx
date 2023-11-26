import React from 'react';
import { products } from '../constants';
import PopularProductCard from '../components/PopularProductCard';

const PopularProducts = () => {
  return (
    <section id='products'
      className='max-container max-sm:mt-12'
    >
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Our Products</span></h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
        Discover the richness of Jaya Swarna Lalitha Cow Milk, sourced from various breeds including HF, Gir, and Indian cows. Indulge in the purity of our fresh cow ghee, a testament to our commitment to quality.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product)=>(
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
