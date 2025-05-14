import { Link } from "react-router-dom";
import { homeCategoryData } from "./homeCategoryData";
import { TCarData } from "@/types";

interface SliderCategoryProps {
  data: { data: TCarData[] };
  title?: string;
  maxItems?: number;
}

const SliderCategory = ({ 
  data, 
  title = "Shop by brand", 
  maxItems = 6 
}: SliderCategoryProps) => {
  if (!data || data.data.length === 0) {
    return (
      <p className="text-center mt-8 text-gray-500">
        No categories to show
      </p>
    );
  }

  // Limit the number of items displayed
  const categoriesToShow = homeCategoryData[0].categories.slice(0, maxItems);

  return (
    <section className="container pt-4 mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-gray-800">
        {title}
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {categoriesToShow.map(({ id, image, title }) => (
          <Link
            key={id}
            to="/allProducts"
            className="relative block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
            aria-label={`Browse ${title} products`}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <span className="absolute bottom-4 left-0 right-0 mx-auto text-white font-semibold text-center px-2 text-lg md:text-xl transition-all duration-300 group-hover:bottom-6">
              {title}
            </span>
          </Link>
        ))}
      </div>
      
      {homeCategoryData[0].categories.length > maxItems && (
        <div className="text-center mt-8">
          <Link 
            to="/allBrands" 
            className="inline-block px-6 py-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300 font-medium"
          >
            View All Brands
          </Link>
        </div>
      )}
    </section>
  );
};

export default SliderCategory;