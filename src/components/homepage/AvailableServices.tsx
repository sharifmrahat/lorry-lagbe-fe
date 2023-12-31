"use client";
import CategoryCard from "../shared/CategoryCard";
import { ICategory } from "@/types";
import Spinner from "../common/Spinner";

const AvailableServices = ({
  categories,
  isLoading,
}: {
  categories: ICategory[];
  isLoading: boolean;
}) => {
  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-primary text-xl lg:text-2xl font-semibold">
          Available Services
        </h3>
        <p className="text-sm lg:text-lg text-slate-500">
          Book Your Desired Service from Available Category!
        </p>
      </div>
      <div>
        {isLoading && (
          <div className="w-fit mx-auto">
            <Spinner />
          </div>
        )}
        {categories?.length && (
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 justify-center items-center px-5 lg:px-16">
            {categories?.map((category: ICategory) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvailableServices;
