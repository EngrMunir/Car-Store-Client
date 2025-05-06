import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { EffectFade, Navigation } from "swiper/modules";
// import { calculateDiscountPrice } from "@/lib/calculateDiscountPrice";
// import { productType } from "@/types/productType";
import { Link } from "react-router-dom";
import { homeCategoryData } from "./homeCategoryData";
import { TCarData } from "@/types";

  
//   type SliderCategoryProps = {
//     data: CarData[];
//   };
  

const SliderCategory = ({ data }: { data: { data: TCarData[] } }) => {
    console.log('slider category',data.data)
    if (!data || data.length === 0) {
        return <p className="text-center mt-8">No categories to show</p>;
      }
    return (
        <section className="container mt-8 mb-20">
            <h2 className="text-center font-bold text-[32px]">Shop by brand</h2>
            <div className="grid grid-cols-2 gap-[35px] mt-6">
                <div className="bg-[#1B5F48] 3xl:h-[687px] h-[536px] flex flex-col justify-between">
                    <div className="mt-14 3xl:ml-12 ml-10">
                        <div>
                            <img width={77} height={41} src="https://ae01.alicdn.com/kf/S73f17457c7224ac9a7174dafc9bcbd44h.png" alt="img" />
                        </div>
                        <p className="text-[rgb(255,255,255)] font-[450] mt-2.5 max-w-[292px]">Your fashion choice</p>
                        <Button asChild size={"sm"} className="bg-background text-black rounded-none 3xl:text-xl font-medium 3xl:mt-6 mt-3">
                            <Link to={"#"}>Shop now</Link>
                        </Button>
                    </div>
                    <div className="3xl:mx-12 mx-10 grid grid-cols-3 gap-4 3xl:mb-10 mb-8">
                        {
                            data?.data.slice(0, 3).map(({ inStock, _id, price, image, brand }) =>
                                <ProductCard key={_id} inStock={inStock} id={_id} brand={brand} image={image} price={price} totalRating={4.7} totalSold={420} />
                            )
                        }
                    </div>
                </div>
                <div>
                    <Swiper
                        // slidesPerView={2}
                        className="group"
                        navigation={{
                            nextEl: ".next-el",
                            prevEl: ".prev-el"
                        }}
                        effect="fade"
                        loop
                        modules={[Navigation, EffectFade]}
                    >

                        {
                            homeCategoryData.map(({ categories, id }) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <div className="grid grid-cols-2 3xl:gap-6 gap-4">
                                            {
                                                categories.map(({ id, image, title }) => {
                                                    return (
                                                        <Link key={id} to={"/products"} className="block 3xl:h-[213px] h-[168px] max-w-[384px] bg-cover" style={{ backgroundImage: `url(${image})` }}>
                                                            <span className="p-6 font-semibold 3xl:text-2xl text-xl max-w-[135px] block">{title}</span>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }

                        <div className="absolute top-1/2 -translate-y-1/2 z-50 w-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="prev-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute left-0"><ChevronLeft size={30} /></div>
                            <div className="next-el w-[60px] h-[60px] flex items-center justify-center bg-[rgba(0,0,0,.25)] cursor-pointer text-white absolute right-0"><ChevronRight size={30} /></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default SliderCategory


type CardProps = {
    id: number | string,
    image: string,
    inStock:boolean,
    brand:string,
    price: number,
    totalRating: number,
    totalSold: number
}

const ProductCard = ({ inStock, id, brand, image, price, totalRating, totalSold }: CardProps) => {

    return (
        <div className="bg-background p-2 pt-2 pb-3 text-[#222]">
            <Link to={`/product-details/${id}`} className="max-w-[205px] max-h-[272px] h-[272px] block overflow-hidden group">
                <img width={205} height={273} sizes="100vw" src={image} alt="img" className="group-hover:scale-105 transition-all duration-300" />
            </Link>
            <div className="mt-3">
            <p className="text-sm font-medium">{brand}</p>
                <p className="3xl:text-xl text-base font-bold inline-block">US ${price}</p>
                <p className="3xl:text-base text-xs text-muted inline-block ml-2">InStock: {inStock}</p>
                <div className="text-sm flex items-center mt-1.5">
                    <div className="inline-flex items-center gap-1">
                        <span className="text-[#fbaa00]"><Star size={15} fill="#fbaa00"/></span>
                        <span className="font-bold inline-block">{totalRating}</span>
                    </div>
                    <span className="block h-2 border-r border-[#dbdbdb] ml-2"></span>
                    <p className="ml-2">
                        <span>{totalSold}</span>
                        <span className="inline-block ml-[3px]">sold</span>
                    </p>
                </div>
            </div>
        </div>
    )
}