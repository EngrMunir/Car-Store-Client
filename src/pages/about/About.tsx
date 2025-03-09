import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { CiClock2 } from "react-icons/ci";
import { PiStarOfDavidBold } from "react-icons/pi";
import { RiBook2Line } from "react-icons/ri";
import { SiMagento } from "react-icons/si";




const About = () => {
    return (
        <div className="">
            {/* history and features */}
           <div className="flex justify-stretch gap-2">
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
                    <p className="relative before:block before:w-2 before:h-2 before:bg-[#ff8901] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4 text-[#ff8901]">History</p>
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
        </div>
    ); 
};

export default About;