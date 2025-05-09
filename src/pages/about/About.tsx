import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { CiClock2 } from "react-icons/ci";
import { PiStarOfDavidBold } from "react-icons/pi";
import { RiBook2Line } from "react-icons/ri";
import { SiMagento } from "react-icons/si";


const About = () => {
    return (
        <div className="mt-5 container">
            {/* history and features */}
           <div className="flex justify-stretch gap-2 mb-8 px-6 mx-auto">
                <div className="w-1/2">
                    <p className="relative before:block before:w-2 before:h-2 before:bg-blue-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-blue-600">History</p>
                    <p className="text-3xl uppercase mb-8">The Company</p>
                    <Accordion type="single" collapsible className="border-2 p-3">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl uppercase">About Company</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xl uppercase">Our Mission</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xl uppercase">Our Vision</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-xl uppercase font-semibold">Our Goals</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div>
                    <p className="relative before:block before:w-2 before:h-2 before:bg-blue-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-blue-600">WE ARE GOOD</p>
                    <p className="text-3xl uppercase mb-8">Our Features</p>
                    <div>
                        <div className="flex gap-2">
                            <div className="bg-slate-100 p-3">
                                <CiClock2 className="text-red-500 my-2 text-3xl"/>
                                <p className="my-2">Always Available</p>
                                <p className="text-sm">Duis dapibus aliquam mi, et euismod <br /> scelerisque ut. Vivamus elit quis urna <br /> adipiscing ...</p>
                            </div>
                            <div className="bg-slate-100 p-3">
                            <SiMagento className="text-red-500 my-2 text-3xl"/>
                                <p className="my-2">Qualified Agents</p>
                                <p className="text-sm">Duis dapibus aliquam mi, et euismod <br /> scelerisque ut. Vivamus elit quis urna <br /> adipiscing ...</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <div className="bg-slate-100 p-3">
                                <RiBook2Line className="text-red-500 my-2 text-3xl"/>
                                <p className="my-2">Fair Prices</p>
                                <p className="text-sm">Duis dapibus aliquam mi, et euismod <br /> scelerisque ut. Vivamus elit quis urna <br /> adipiscing ...</p>
                            </div>
                            <div className="bg-slate-100 p-3">
                                <PiStarOfDavidBold className="text-red-500 my-2 text-3xl"/>
                                <p className="my-2">Best Offers</p>
                                <p className="text-sm">Duis dapibus aliquam mi, et euismod <br /> scelerisque ut. Vivamus elit quis urna <br /> adipiscing ...</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           {/* latest news */}
           <div className="bg-slate-100 mb-8">
            <div className="mb-8 pt-8">
                <div  className="px-6 mx-auto">
                <p className="relative before:block before:w-2 before:h-2 before:bg-blue-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-blue-600 ">In the news</p>
                <p className="text-3xl uppercase mb-8">Latest news</p>
                </div>          
                <div className="flex px-6 mx-auto">
                    <p>Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.</p>
                    <button className="uppercase bg-blue-600 text-white text-nowrap px-3">Check All News</button>
                </div>
            </div>
            <div className="flex gap-5 p-5">
                {/* card start */}
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="object-cover object-center w-full h-56" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>
    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white uppercase">Framing and Insulating Walls In Warehouse and Corporate</h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing, Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing ...</p>
    </div>
            </div>
{/* end card */}
                {/* card start */}
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="object-cover object-center w-full h-56" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white uppercase">Framing and Insulating Walls In Warehouse and Corporate</h1>
        <p className="py-2 text-gray-700 dark:text-gray-400">Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing, Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing ...</p>
    </div>
            </div>
{/* end card */}
                {/* card start */}
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="object-cover object-center w-full h-56" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

    <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Framing and Insulating Walls In Warehouse and Corporate</h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing, Duis dapibus aliquam mi, et euismod scelerisque ut. Vivamus elit quis urna adipiscing ...</p>

    </div>
            </div>
{/* end card */}
            </div>
           </div>
           {/* our team */}
           <div className="bg-slate-100">
    <div className="pt-5">
        <div className="px-6 mx-auto">
            <p className="relative before:block before:w-2 before:h-2 before:bg-blue-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-blue-600">Creatives</p>
            <p className="text-3xl uppercase mb-8">Our Team</p>
        </div>

        {/* Updated paragraph section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 mx-auto mb-6">
            <p className="text-gray-700 max-w-3xl text-center md:text-left">
                Meet our passionate and skilled team of developers, engineers, and strategists dedicated to delivering top-notch automotive solutions. Together, we drive innovation in every detail.
            </p>
            <button className="uppercase bg-blue-600 text-white whitespace-nowrap px-4 py-2 rounded hover:bg-blue-700 transition">
                Check All News
            </button>
        </div>

        {/* Team Section */}
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 xl:grid-cols-4">
                    {/* 1st Member */}
                    <div className="flex flex-col items-center p-8 bg-slate-50 rounded shadow-md">
                        <img src="https://i.ibb.co.com/kmxv4VN/s4.jpg" alt="Sayed Reduan" className="w-32 h-32 bg-gray-200 rounded-full ring-4 ring-gray-300 dark:ring-gray-600" />
                        <h1 className="mt-6 text-lg font-semibold text-gray-800 dark:text-white">Sayed Reduan</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-300">ML Engineer</p>
                    </div>

                    {/* 2nd Member */}
                    <div className="flex flex-col items-center p-8 bg-slate-50 rounded shadow-md">
                        <img src="https://i.ibb.co.com/S67YC4j/prof.jpg" alt="Sirajul Munir" className="w-32 h-32 bg-gray-200 rounded-full ring-4 ring-gray-300 dark:ring-gray-600" />
                        <h1 className="mt-6 text-lg font-semibold text-gray-800 dark:text-white">Sirajul Munir</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Software Engineer</p>
                    </div>

                    {/* 3rd Member */}
                    <div className="flex flex-col items-center p-8 bg-slate-50 rounded shadow-md">
                        <img src="https://i.ibb.co.com/VwJTcvj/280273167-528593525530494-2949390220444129761-n-removebg-preview-1.png" alt="Emran Hossain" className="w-32 h-32 bg-gray-200 rounded-full ring-4 ring-gray-300 dark:ring-gray-600" />
                        <h1 className="mt-6 text-lg font-semibold text-gray-800 dark:text-white">Emran Hossain</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Software Engineer</p>
                    </div>

                    {/* 4th Member */}
                    <div className="flex flex-col items-center p-8 bg-slate-50 rounded shadow-md">
                        <img src="https://i.ibb.co.com/jv4qW0CB/saran-n.jpg" alt="Saran Barua" className="w-32 h-32 bg-gray-200 rounded-full ring-4 ring-gray-300 dark:ring-gray-600" />
                        <h1 className="mt-6 text-lg font-semibold text-gray-800 dark:text-white">Saran Barua</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-300">Software Engineer</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>

        <div className="bg-slate-100">
  <div className="pt-5">
    <div className="px-6 mx-auto">
      <p className="relative before:block before:w-2 before:h-2 before:bg-blue-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-blue-600">People Say</p>
      <p className="text-3xl uppercase mb-8">Testimonials</p>
    </div>

    {/* Updated paragraph text */}
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 mx-auto mb-6">
      <p className="text-gray-700 max-w-3xl text-center md:text-left">
        Hear from our satisfied customers who have experienced exceptional services. Our reputation for quality and reliability speaks for itself.
      </p>
      <button className="uppercase bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Check All News
      </button>
    </div>

    <section className="dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          {/* Testimonial 1 */}
          <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “The service was outstanding and the staff was incredibly knowledgeable. I had my car repaired faster than expected, and the price was very fair. Highly recommend Car Shop for all vehicle needs!”
            </p>

            <div className="flex items-center mt-6">
              <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Robbert" />
              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Robbert</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Robert Consultancy</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “I brought my SUV in for detailing and the results were amazing. My vehicle looked brand new! The team was courteous and professional. I will definitely be a repeat customer.”
            </p>

            <div className="flex items-center mt-6">
              <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Mia Brown" />
              <div className="mx-4">
                <h1 className="font-semibold text-blue-500">Mia Brown</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">Marketing Manager at Stech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>


           
        </div>
    ); 
};

export default About;