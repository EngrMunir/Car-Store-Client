import { useState } from "react";
import ProductCard from "./ProductCard";
import { TCar } from "@/types";
import { useGetAllCarsQuery } from "@/redux/features/Car/carManagementApi";

const AllProduct = () => {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [model] = useState("");
  const [priceMin] = useState("");
  const [priceMax] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const { data: carsData, isLoading } = useGetAllCarsQuery({
    search,
    brand,
    category,
    model,
    priceMin,
    priceMax,
    sortBy,
    sortOrder,
  });

  if (isLoading) {
    return <p className="text-center">Loading.......</p>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center">Available Cars</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 p-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded"
        />

        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="p-2 border rounded">
          <option value="">All Brands</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="BMW">BMW</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded">
          <option value="">All Categories</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Truck">Truck</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="p-2 border rounded">
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="year">Year</option>
        </select>

        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="p-2 border rounded">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Display Cars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {carsData?.data?.map((item: TCar) => (
          <ProductCard key={item._id} car={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
