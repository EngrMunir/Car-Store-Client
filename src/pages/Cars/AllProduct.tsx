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
  const [page, setPage] = useState(1);
  const [limit] = useState(6);


  const { data: carsData, isLoading } = useGetAllCarsQuery({
    search,
    brand,
    category,
    model,
    priceMin,
    priceMax,
    sortBy,
    sortOrder,
    page,
    limit,
  });

  if (isLoading) {
    return <p className="text-center">Loading.......</p>;
  }

  return (
    <div className="container mx-auto px-4 m-5">
      {/* <h2 className="text-3xl text-center my-6">Available Cars</h2> */}

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4 border p-4 rounded shadow-sm space-y-4">
          <h3 className="text-xl font-semibold">Filter Options</h3>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 border rounded"
          />

          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">All Brands</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="BMW">BMW</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">All Categories</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Truck">Truck</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="year">Year</option>
          </select>

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carsData?.data?.map((item: TCar) => (
            <ProductCard key={item._id} car={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)} disabled={carsData?.data?.length < limit}>
          Next
        </button>
      </div>

    </div>
  );
};

export default AllProduct;
