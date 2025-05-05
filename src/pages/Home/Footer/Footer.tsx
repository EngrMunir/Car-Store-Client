// import { FaCar, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900 py-12">
//       <div className="container px-6 mx-auto">
//         <div className="md:flex md:items-center md:justify-between">
//           <h1 className="text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
//             Subscribe to our newsletter for the latest car deals & updates!
//           </h1>
//           <div className="mt-6 md:mt-0 bg-[#fb923c] px-5 py-2 rounded-lg">
//             <a
//               href="#"
//               className="text-white flex items-center gap-x-3 hover:opacity-80"
//             >
//               <span>Sign Up Now</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-5 h-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//                 />
//               </svg>
//             </a>
//           </div>
//         </div>

//         <hr className="my-6 border-gray-200 dark:border-gray-700" />

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           <div>
//             <p className="font-semibold text-gray-800 dark:text-white">About Car Shop</p>
//             <p className="mt-2 text-gray-600 dark:text-gray-300">
//               Your trusted online marketplace for buying and selling high-quality
//               new and pre-owned cars.
//             </p>
//           </div>

//           <div>
//             <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>
//             <div className="flex flex-col mt-2 space-y-2">
//               <a href="#" className="text-gray-600 hover:text-[#fb923c]">Home</a>
//               <a href="#" className="text-gray-600 hover:text-[#fb923c]">Browse Cars</a>
//               <a href="#" className="text-gray-600 hover:text-[#fb923c]">Sell Your Car</a>
//             </div>
//           </div>

//           <div>
//             <p className="font-semibold text-gray-800 dark:text-white">Our Services</p>
//             <div className="flex flex-col mt-2 space-y-2">
//               <a href="#" className="text-gray-600 hover:text-[#fb923c]">Car Financing</a>
//               <a href="#" className="text-gray-600 hover:text-[#fb923c]">Vehicle Inspection</a>
//               <a href="#" className="text-gray-600 hover:text-[#fb923c]">Car Insurance</a>
//             </div>
//           </div>

//           <div>
//             <p className="font-semibold text-gray-800 dark:text-white">Contact Us</p>
//             <div className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
//               <p className="flex items-center gap-2">
//                 <FaPhoneAlt /> +880 123 456 789
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaEnvelope /> support@carshop.com
//               </p>
//               <p className="flex items-center gap-2">
//                 <FaMapMarkerAlt /> 123 Car Street, Chattogram, BD
//               </p>
//             </div>
//           </div>
//         </div>

//         <hr className="my-6 border-gray-200 dark:border-gray-700" />

//         <div className="flex flex-col items-center sm:flex-row sm:justify-between">
//           <div className="text-2xl flex items-center gap-2 font-bold uppercase">
//             <FaCar />
//             <p>Car</p>
//             <p className="text-[#fb923c]">Shop</p>
//           </div>
//           <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-300">
//             © {new Date().getFullYear()} Car Shop. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// import { Link } from "react-router-dom"



const languages = [
    { name: "Russian", url: "#" },
    { name: "Portuguese", url: "#" },
    { name: "Spanish", url: "#" },
    { name: "French", url: "#" },
    { name: "German", url: "#" },
    { name: "Italian", url: "#" },
    { name: "Dutch", url: "#" },
    { name: "Turkish", url: "#" },
    { name: "Japanese", url: "#" },
    { name: "Korean", url: "#" },
    { name: "Thai", url: "#" },
    { name: "Vietnamese", url: "#" },
    { name: "Arabic", url: "#" },
    { name: "Hebrew", url: "#" },
    { name: "Polish", url: "#" }
];

const ZMACHelp = [
    { name: "Help Center", url: "#" },
    { name: "Disputes & Reports", url: "#" },
    { name: "Buyer Protection", url: "#" },
    { name: "Report IPR infringement", url: "#" },
    { name: "Regulated Information", url: "#" },
    { name: "Integrity Compliance", url: "#" },
    { name: "Transparency Center", url: "#" },
    { name: "Submit report (non-registered users)", url: "#" }
];

const ZMACGroup = [
    { name: "CarShop Group Website", url: "#" },
    { name: "CarShop", url: "#" },
    { name: "CarShopmama", url: "#" },
    { name: "CarShoppay", url: "#" },
    { name: "Fliggy", url: "#" },
    { name: "CarShop Cloud", url: "#" },
    { name: "CarShop International", url: "#" },
    { name: "CarShopTelecom", url: "#" },
    { name: "DingTalk", url: "#" },
    { name: "Juhuasuan", url: "#" },
    { name: "Taobao Marketplace", url: "#" },
    { name: "Tmall", url: "#" },
    { name: "Taobao Global", url: "#" },
    { name: "CarShopOS", url: "#" },
    { name: "1688", url: "#" }
];

const Footer = () => {
    return (
        <footer className="bg-[#e8e8e8] pt-4">
            <div className="container">
                <div className="flex">
                    <div className="w-1/2 flex justify-between">
                        <div className="flex-1 mr-4">
                            <b className="block mt-4 font-bold leading-7 mb-[5px]">Customer service</b>
                            <ul>
                                <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Help Center</Link></li>
                                <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Transaction Services Agreement for</Link></li>
                                <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">non-EU/UK Consumers</Link></li>
                                <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Terms and Conditions for EU/EEA/UK</Link></li>
                                <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Consumers (Transactions)</Link></li>
                                <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Take our feedback survey</Link></li>
                            </ul>
                        </div>
                        <div className="flex flex-[2]">
                            <div className="flex-1">
                                <b className="block mt-4 font-bold leading-7 mb-[5px]">Shopping with us</b>
                                <ul>
                                    <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Making payments</Link></li>
                                    <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Delivery options</Link></li>
                                    <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Buyer Protection</Link></li>
                                </ul>
                            </div>
                            <div className="flex-1">
                                <b className="block mt-4 font-bold leading-7 mb-[5px]">Collaborate with us</b>
                                <ul>
                                    <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Partnerships</Link></li>
                                    <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Affiliate program</Link></li>
                                    <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">DS Center</Link></li>
                                    <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Seller Log In</Link></li>
                                    <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">中国卖家入驻</Link></li>
                                    <li><Link to={"#"} className="text-sm text-accent-foreground leading-7">Non-Chinese Seller Registration</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-between">
                        <div className="flex-[2]">
                            <b className="block mt-4 font-bold leading-7 mb-[5px]">Pay with</b>
                            <ul className="flex gap-2">
                                <li><img src="https://ae01.alicdn.com/kf/S2ee1f368a78345c293982065980ceddeG/216x144.png" alt="img" className="max-h-8 rounded-md" /></li>
                                <li><img src="https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png" alt="img" className="max-h-8 rounded-md" /></li>
                                <li><img src="https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png" alt="img" className="max-h-8 rounded-md" /></li>
                                <li><img src="https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png" alt="img" className="max-h-8 rounded-md" /></li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <b className="block mt-4 font-bold leading-7 mb-[5px]">Stay connected</b>
                            <ul className="flex gap-2">
                                <li>
                                    <Link to={"#"}>
                                        <img src="https://ae01.alicdn.com/kf/H4d523ca938f84764ab9970676846ceddE.png" alt="img" className="max-h-8 rounded-md" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"}>
                                        <img src="https://ae01.alicdn.com/kf/H3f646a8410084ae39ee8c979ca1409a2K.png" alt="img" className="max-h-8 rounded-md" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"}>
                                        <img src="https://ae01.alicdn.com/kf/H92546404c05349bd9a64fa2eb268541e1.png" alt="img" className="max-h-8 rounded-md" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"}>
                                        <img src="https://ae01.alicdn.com/kf/Hf5aa563a0e8e4c7e93b6340dd38ebd30B.png" alt="img" className="max-h-8 rounded-md" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"}>
                                        <img src="https://ae01.alicdn.com/kf/Heb2cbbfeb7bf407f9cbe7fdd8cdd82d5b.png" alt="img" className="max-h-8 rounded-md" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex mt-[30px]">
                    <div className="flex-1">
                        <b className="block font-bold leading-7 mb-[5px]">Help</b>
                        <div>
                            {ZMACHelp.map((link, index) => (
                                <span key={link.name}>
                                    <Link
                                        to={link.url}
                                        className="text-accent-foreground text-sm hover:text-[#f90] transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                    <span className="text-accent-foreground">{index < ZMACHelp.length - 1 && ", "}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <b className="block font-bold leading-7 mb-[5px]">CarShop Multi-Language Sites</b>
                        <div>
                            {languages.map((language, index) => (
                                <span key={language.name}>
                                    <Link
                                        to={language.url}
                                        className="text-accent-foreground text-sm hover:text-[#f90] transition-all duration-300"
                                    >
                                        {language.name}
                                    </Link>
                                    <span className="text-accent-foreground">{index < languages.length - 1 && ", "}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex mt-[30px]">
                    <div className="flex-1">
                        <b className="block font-bold leading-7 mb-[5px]">Browse by Category</b>
                        <div className="text-accent-foreground">
                            <Link to={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> All Popular</Link>{", "}
                            <Link to={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Product</Link>{", "}
                            <Link to={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Promotion</Link>{", "}
                            <Link to={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Low Price</Link>{", "}
                            <Link to={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Great Value</Link>{", "}
                            <Link to={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Reviews</Link>{", "}
                            <Link to={"#"} className="text-sm hover:text-[#f90] transition-all duration-300"> Blog</Link>{", "}
                        </div>
                    </div>
                    <div className="flex-1">
                        <b className="block font-bold leading-7 mb-[5px]">Car Shop</b>
                        <div>
                            {ZMACGroup.map((link, index) => (
                                <span key={link.name}>
                                    <Link
                                        to={link.url}
                                        className="text-accent-foreground text-sm hover:text-[#f90] transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                    <span className="text-accent-foreground">{index < ZMACGroup.length - 1 && ", "}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-black text-[#ccc] text-sm leading-[18px] py-2 mt-10">
                <div className="container">
                    <Link to={"#"}>Intellectual Property Protection</Link>
                    {" - "}
                    <Link to={"#"}>Privacy Policy</Link>
                    {" - "}
                    <Link to={"#"}>Sitemap</Link>
                    {" - "}
                    <Link to={"#"}>Terms of Use</Link>
                    {" - "}
                    <Link to={"#"}>Information for EU consumers</Link>
                    {" - "}
                    <Link to={"#"}>Imprint</Link>
                    {" - "}
                    <Link to={"#"}>Transaction Services Agreement for non-EU/UK Consumers</Link>
                    {" - "}
                    <Link to={"#"}>Terms and Conditions for EU/EEA/UK Consumers</Link>
                    {" - "}
                    <Link to={"#"}>User Information Legal Enquiry Guide</Link>
                    {" - "}
                    <Link to={"#"}> ©️2010-2024 Carshop.com. All rights reserved.</Link>
                    {" - "}
                    <Link to={"#"}> ©️2010-2024 Carshop.com. All rights reserved.</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer