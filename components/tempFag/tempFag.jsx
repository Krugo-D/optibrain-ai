import React, { useState } from "react";
import styles from "./Faq.module.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqData = [
    {
      question: "What is Artificial Intelligence (AI)?",
      answer:
        "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines, enabling them to learn, reason, and problem-solve like humans.",
    },
    {
      question: "What are some common AI use cases?",
      answer:
        "AI is used in various fields, such as healthcare, finance, marketing, transportation, and more. Common use cases include image recognition, natural language processing, recommendation systems, and robotics.",
    },
    // Add more questions and answers
    // ...
    {
      question:
        "Why has there been a recent spike in the performance of large language models?",
      answer:
        "The recent spike in the performance of large language models can be attributed to advances in algorithms, an increase in computational power, and the availability of large-scale datasets. These factors have allowed models to be trained on vast amounts of data, leading to significant improvements in their capabilities.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      <div className={styles.faqList}>
        {faqData.map((faqItem, index) => (
          <div key={index} className={styles.faqItem}>
            <h2 className={styles.question} onClick={() => handleClick(index)}>
              {faqItem.question}
            </h2>
            {activeIndex === index && (
              <p className={styles.answer}>{faqItem.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
