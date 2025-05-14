/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from "swiper/modules";
import { TCarData } from "@/types";
import { Link } from "react-router-dom";

const TodayDeals = ({ data }: { data: { data: TCarData[] } }) => {
  return (
    <section className="container mt-8">
      <h2 className="text-center font-bold text-[32px]">Today's deals</h2>
      <div className="grid grid-cols-2 gap-[35px] mt-6">
        {/* Super Deals Section */}
        <div className="relative bg-[url('https://ae01.alicdn.com/kf/S750461e03a75471cac965e67d7d557229.jpg')] bg-cover bg-no-repeat group/super rounded-2xl">
          <div className="pt-6 flex flex-col items-center">
            <h5 className="text-2xl font-bold text-center text-white">SuperDeals</h5>
            <div className="px-3 py-1.5 bg-white rounded-[20px] inline-flex items-center gap-2 mt-2 font-medium">
              <img width={24} height={24} src="https://ae01.alicdn.com/kf/S493ec270c78c4b8b90b8993ec0197d3a6/48x48.png" alt="clock" className="size-6" />
              <span className="leading-none">Ends in: 18:23:20</span>
              <ChevronRight size={17} />
            </div>
          </div>
          <div className="py-6 px-8">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={16}
              navigation={{ nextEl: ".next-el-super", prevEl: ".prev-el-super" }}
              loop
              modules={[Navigation]}
              className="super-deals-slider" // Add a unique class here
            >
              {data?.data.slice(0, 3).map((item) => (
                <SwiperSlide key={item._id} style={{ width: '180px' }}>
                  <Card {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover/super:opacity-100 transition-all duration-300">
            <div className="prev-el-super w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0">
              <ChevronLeft size={30} />
            </div>
            <div className="next-el-super w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0">
              <ChevronRight size={30} />
            </div>
          </div>
        </div>

        {/* Big Save Section */}
        <div className="relative bg-[url('https://ae01.alicdn.com/kf/Sc8908a992f6341cda52c8b6ac2d302efG.jpg')] bg-cover bg-no-repeat group/big rounded-2xl">
          <div className="pt-6 flex flex-col items-center">
            <h5 className="text-2xl font-bold text-center text-white">Big Save</h5>
            <div className="px-3 py-1.5 bg-white rounded-[20px] inline-flex items-center gap-2 mt-2 font-medium">
              <div className="flex">
                <img width={24} height={24} src="https://ae01.alicdn.com/kf/S588971e0387446a4bcf202557655fc61t.png" alt="img1" className="size-6 rounded-full z-10" />
                <img width={24} height={24} src="https://ae01.alicdn.com/kf/S213f18d82e794cb580fc2b59738b061fQ.png" alt="img2" className="size-6 rounded-full absolute -translate-x-2 z-[2]" />
                <img width={24} height={24} src="https://ae01.alicdn.com/kf/S1d5267d0fddd4213810e41ed1a4ebf247.png" alt="img3" className="size-6 rounded-full absolute -translate-x-10 z-[1]" />
              </div>
              <span>500+ Brands</span>
              <ChevronRight size={17} />
            </div>
          </div>
          <div className="py-6 px-8">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={16}
              navigation={{ nextEl: ".next-el-big", prevEl: ".prev-el-big" }}
              loop
              modules={[Navigation]}
              className="big-save-slider" // Add a unique class here
            >
              {data?.data.slice(0, 3).map((item) => (
                <SwiperSlide key={item._id} style={{ width: '180px' }}>
                  <CardBig {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover/big:opacity-100 transition-all duration-300">
            <div className="prev-el-big w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0">
              <ChevronLeft size={30} />
            </div>
            <div className="next-el-big w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0">
              <ChevronRight size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayDeals;


// Card Component
interface CardPropsType {
  _id: number | string;
  price: number;
  image: string;
  brand: string;
  inStock: boolean;
}

const CardBig = ({ _id, price, image, brand, inStock }: CardPropsType) => {
  // Demo discount: 20%
  const demoDiscountPercent = 20;
  const discountAmount = (price * demoDiscountPercent) / 100;
  const discountedPrice = (price - discountAmount).toFixed(2);

  return (
    <div className="p-2 bg-background rounded-lg group">
      <Link to={`/product-details/${_id}`} className="rounded-md max-w-[160px] max-h-[160px] overflow-hidden block">
        <img width={160} height={160} src={image} alt="product" className="rounded-md group-hover:scale-105 transition-all duration-300" />
      </Link>
      <div className="mt-3">
        <Link to={`/product-details/${_id}`} className="min-h-10 line-clamp-2 font-[450] leading-5 hover:text-primary-foreground transition-all duration-300">{brand}</Link>
        <div className="mt-4">
          <p className="font-bold 3xl:text-xl inline-block leading-none mr-2 text-green-400">
            US ${discountedPrice}
          </p>
          <p className="line-through inline-block leading-none 3xl:text-base text-xs text-primary font-bold">
            US ${price}
          </p>
        </div>
        <div className="inline-block text-sm bg-blue-600 px-1 py-[3px] text-white mt-1.5 rounded">
          -{demoDiscountPercent}%
        </div>
      </div>
    </div>
  );
};

const Card = ({ _id, price, image, brand, inStock }: CardPropsType) => {
  // Demo discount: 15%
  const demoDiscountPercent = 15;
  const discountAmount = (price * demoDiscountPercent) / 100;
  const discountedPrice = (price - discountAmount).toFixed(2);

  return (
    <div className="p-2 bg-background rounded-lg group">
      <Link to={`/product-details/${_id}`} className="rounded-md max-w-[160px] max-h-[160px] overflow-hidden block">
        <img width={160} height={160} src={image} alt="product" className="rounded-md group-hover:scale-105 transition-all duration-300" />
      </Link>
      <div className="mt-3">
        <Link to={`/product-details/${_id}`} className="min-h-10 line-clamp-2 font-[450] leading-5 hover:text-primary-foreground transition-all duration-300">{brand}</Link>
        <div className="mt-4">
          <p className="font-bold 3xl:text-xl inline-block leading-none mr-2 text-green-500">
            US ${discountedPrice}
          </p>
          <p className="line-through inline-block leading-none 3xl:text-base text-xs text-primary font-bold">
            US ${price}
          </p>
        </div>
        <div className="inline-block text-sm bg-blue-600 px-1 py-[3px] text-white mt-1.5 rounded">
          -{demoDiscountPercent}%
        </div>
      </div>
    </div>
  );
};
