import { useState } from "react";

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
    <div className="bg-white dark:bg-gray-900 pt-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white text-center">
          Frequently Asked Questions
        </h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="flex items-center w-full justify-between focus:outline-none px-4 py-3 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h1 className="text-xl text-gray-700 dark:text-white">
                  {faq.question}
                </h1>
                <svg
                  className="w-6 h-6 text-blue-500 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={openIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"}
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="mt-2 px-4 text-gray-500 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}

              <hr className="my-4 border-gray-200 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
