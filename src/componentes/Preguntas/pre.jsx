import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import faqs from './preguntas';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto w-full p-4">
    

      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(150,31,28,0.6)] transition"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
            >
              <span className="text-gray-800 font-medium">{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="w-5 h-5 text-gray-700" />
              ) : (
                <FiChevronDown className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-96 p-4" : "max-h-0 p-0"
              } bg-white text-gray-700`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
