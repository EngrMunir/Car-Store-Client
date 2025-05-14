
import banner from '/banner.jpg'

const Banner = () => {
    return (
       <div className='container mx-auto pt-4'>
           <div
        className="hero h-[70vh] rounded-2xl"
        style={{
          backgroundImage: `url(${banner})`,
        }}>
        <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
        
      </div>
       </div>
    );
};

export default Banner;