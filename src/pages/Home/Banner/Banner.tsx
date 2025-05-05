
import banner from '/banner.jpg'

const Banner = () => {
    return (
        <div
        className="hero h-[70vh] rounded-2xl mt-6 mb-6"
        style={{
          backgroundImage: `url(${banner})`,
        }}>
        <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
        
      </div>
    );
};

export default Banner;