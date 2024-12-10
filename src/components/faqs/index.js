import React, { useState } from "react";

const Questions= () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question:
        "Can I customize this Kashmir honeymoon package to suit my preferences?",
      answer:
        "Absolutely! Kashmir Nirvana specializes in creating personalized luxury honeymoon experiences in Kashmir. We can customize the Kashmir tour package itinerary, duration, and activities to match your desires. We offer a range of options to ensure your Kashmir honeymoon is tailored to your perfect vision.",
    },
    {
      question:
        "Is this package suitable for solo travelers or groups visiting Kashmir?",
      answer:
        "Yes, this package is suitable for both solo travelers and groups. We offer various options to cater to different preferences.",
    },
    {
      question: "What is the best time to visit Kashmir for a honeymoon?",
      answer:
        "The best time to visit Kashmir for a honeymoon is between April and October, when the weather is pleasant and the natural beauty is at its peak.",
    },
    {
      question:
        "What kind of luxury amenities can I expect during my Kashmir honeymoon with Kashmir Nirvana?",
      answer:
        "Our packages include luxury accommodations, private tours, personalized services, and exclusive activities designed to provide an unforgettable experience.",
    },
    {
      question:
        "Are there any romantic experiences or couple activities included in the Kashmir honeymoon package?",
      answer:
        "Yes, the package includes various romantic experiences such as private shikara rides, candlelight dinners, and scenic tours designed for couples.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section px-100">
      <h2>FAQs</h2>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <span>{activeIndex === index ? "-" : "+"}</span>
            {item.question}
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
