import { companyFeaturesData } from "@/db/companyFeaturesData";

const CompanyFeatures = () => {
  return (
    <section className="container mx-auto py-12">
      <h5 className="text-3xl font-bold text-center mb-6">
        <span className="block">Better Choices,</span> <span className="block">Better Prices</span>
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {companyFeaturesData.map(({ description, img, title }) => {
          return (
            <div key={title} className="flex flex-col items-center justify-center text-center">
              <div>
                <img src={img} alt="coin" />
              </div>
              <div className="mt-2">
                <strong className="text-[15px]">{title}</strong>
                <p className="text-xs text-[rgb(153,153,153)] mt-1 min-h-7">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CompanyFeatures;
