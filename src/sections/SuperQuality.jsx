import { cow } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Indulge in Premium Dairy Goodness: <br />
          <span className='text-coral-red'> JSL Cow Products</span>
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Ensuring superior quality and taste, our meticulously sourced cow milk and ghee are crafted to elevate your daily nourishment. Experience unmatched freshness, innovation, and a touch of tradition, as our dedication to detail and excellence guarantees your satisfaction in every JSL product.
        </p>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={cow}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;