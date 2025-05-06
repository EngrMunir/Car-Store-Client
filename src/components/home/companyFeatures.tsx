import { companyFeaturesData } from "@/db/companyFeaturesData"


const CompanyFeatures = () => {
    return (
        <section className="container flex justify-between flex-wrap gap-y-5 py-15">
            <h5 className="text-3xl font-bold"><span className="block">Better Choices,</span> <span className="block">Better Prices</span></h5>
            <div className="grid grid-cols-6 gap-5 max-w-[1256px]">
                {
                    companyFeaturesData.map(({description, img, title}) => {
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
                        )
                    })
                }
            </div>
        </section>
    )
}

export default CompanyFeatures