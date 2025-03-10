import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { CiClock2 } from "react-icons/ci";
import { PiStarOfDavidBold } from "react-icons/pi";
import { RiBook2Line } from "react-icons/ri";
import { SiMagento } from "react-icons/si";




const About = () => {
    return (
        <div className="">
            {/* history and features */}
           <div className="flex justify-stretch gap-2 mb-8 px-6 mx-auto">
                <div className="w-1/2">
                    <p className="relative before:block before:w-2 before:h-2 before:bg-[#ff8901] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-[#ff8901]">History</p>
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
                    <p className="relative before:block before:w-2 before:h-2 before:bg-[#ff8901] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-[#ff8901]">WE ARE GOOD</p>
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
                <p className="relative before:block before:w-2 before:h-2 before:bg-[#ff8901] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-[#ff8901] ">In the news</p>
                <p className="text-3xl uppercase mb-8">Latest news</p>
                </div>          
                <div className="flex px-6 mx-auto">
                    <p>Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.</p>
                    <button className="uppercase bg-red-500 text-white text-nowrap px-3">Check All News</button>
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
           <div>
            <div>
                <div className="px-6 mx-auto">
                <p className="relative before:block before:w-2 before:h-2 before:bg-[#ff8901] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-[#ff8901]">Creatives</p>
                <p className="text-3xl uppercase mb-8">Our team</p>
                </div>
               
                <div className="flex px-6 mx-auto">
                    <p>Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.</p>
                    <button className="uppercase bg-red-500 text-white text-nowrap px-3">Check All News</button>
                </div>
                <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto animate-pulse">
        
        {/* 1st */}
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <div className="flex flex-col items-center p-8">
                <img src="https://i.ibb.co.com/kmxv4VN/s4.jpg" className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></img>
                <h1 className="w-40 h-2 mx-auto mt-6 rounded-lg dark:bg-gray-700 text-center">Sayed Reduan</h1>

                <p className="w-32 h-2 mx-auto mt-4 rounded-lg dark:bg-gray-700 text-nowrap text-center">ML Engineer</p>
            </div>
            {/* 2nd */}
            <div className="flex flex-col items-center p-8">
                <img src="https://i.ibb.co.com/S67YC4j/prof.jpg" className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></img>
                <h1 className="w-40 h-2 mx-auto mt-6 rounded-lg dark:bg-gray-700 text-center">Sirajul Munir</h1>

                <p className="w-32 h-2 mx-auto mt-4 rounded-lg dark:bg-gray-700 text-nowrap text-center">Software Enginner</p>

            </div>
            {/* 3rd */}
            <div className="flex flex-col items-center p-8">
                <img src="https://i.ibb.co.com/VwJTcvj/280273167-528593525530494-2949390220444129761-n-removebg-preview-1.png" className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></img>
                <h1 className="w-40 h-2 mx-auto mt-6 rounded-lg dark:bg-gray-700 text-center">Emran Hossain</h1>

                <p className="w-32 h-2 mx-auto mt-4 rounded-lg dark:bg-gray-700 text-nowrap text-center">Software Engineer</p>
            </div>
            {/* 4th */}
            <div className="flex flex-col items-center p-8">
                <img src="https://i.ibb.co.com/jv4qW0CB/saran-n.jpg" className="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></img>
                <h1 className="w-40 h-2 mx-auto mt-6 rounded-lg dark:bg-gray-700 text-center">Saran Barua</h1>

                <p className="w-32 h-2 mx-auto mt-4 rounded-lg dark:bg-gray-700 text-nowrap text-center">Software Engineer</p>

            </div>
        </div>
    </div>
</section>
            </div>
           </div>
           {/* testimonials */}
           <div className="bg-slate-100">
            <div className="pt-5 ">
                <div className="px-6 mx-auto">
                <p className="relative before:block before:w-2 before:h-2 before:bg-[#ff8901] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-[#ff8901]">People Say</p>
                <p className="text-3xl uppercase mb-8">Testimonials</p>
                </div>
                <div className="flex px-6 mx-auto">
                    <p>Car Shop is a business theme. Perfectly suited for Auto Mechanic, Car Repair Shops, Car Wash, Garages, Automobile Mechanicals, Mechanic Workshops, Auto Painting, Auto Centres.</p>
                    <button className="uppercase bg-red-500 text-white text-nowrap px-3">Check All News</button>
                </div>
                {/* ......... */}
                <section className=" dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto">
                        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
                            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                                <p className="leading-loose text-gray-500 dark:text-gray-300">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                                </p>

                                <div className="flex items-center mt-6">
                                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                    
                                    <div className="mx-4">
                                        <h1 className="font-semibold text-blue-500">Robbert</h1>
                                        <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Robert Consultency</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                                <p className="leading-loose text-gray-500 dark:text-gray-300">
                                    “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                                </p>

                                <div className="flex items-center mt-6">
                                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                                    
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