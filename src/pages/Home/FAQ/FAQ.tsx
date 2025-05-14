import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How can I purchase a car from Sar-Shop?",
    answer:
      "You can browse our inventory, select a car, and proceed to checkout. We offer multiple payment options, including financing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, bank transfers, and financing options through our partnered banks.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we provide financing through our trusted partners. You can apply directly on the car's details page.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return policy if the car has not been driven more than 500 miles and is in its original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Delivery times vary by location but typically take between 5-10 business days.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our car purchasing process
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h2 className="text-lg font-medium text-gray-900 dark:text-white sm:text-xl">
                  {faq.question}
                </h2>
                <span className="ml-4 flex-shrink-0 text-blue-600 dark:text-blue-400">
                  {openIndex === index ? (
                    <FaChevronUp className="h-5 w-5" />
                  ) : (
                    <FaChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>

              <div
                id={`faq-${index}`}
                className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "opacity-100 max-h-96"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions?{" "}
            <a
              href="/contact"
              className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;