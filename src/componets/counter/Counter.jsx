import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const counterNumber = [
  { id: 1, label: "2M+", title: "Download", figure: "M" },
  { id: 2, label: "18K+", title: "Feedback", figure: "K" },
  { id: 3, label: "13K+", title: "Workers", figure: "K" },
  { id: 4, label: "10YRS+", title: "Years of Exp", figure: "YRS" },
  { id: 5, label: "500K+", title: "Contributors", figure: "K" },
];

const Counter = () => {
  const [counters, setCounters] = useState(Array(counterNumber.length).fill(0));
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(counterRef.current); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      counterNumber.forEach((counter, index) => {
        let count = 0;
        const target = parseInt(counter.label) || 0; // Parse the number

        // Calculate how much to increment based on desired duration and interval
        const duration = 4000; // 4 seconds
        const intervalTime = 50; // Time between increments in milliseconds
        const totalSteps = duration / intervalTime; // Total number of steps
        const increment = Math.ceil(target / totalSteps); // Increment value

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            count = target; // Ensure we do not exceed the target
            clearInterval(timer); // Stop counting when target is reached
          }
          setCounters((prevCounters) => {
            const newCounters = [...prevCounters];
            newCounters[index] = count;
            return newCounters;
          });
        }, intervalTime); // Set the interval for counting

        return () => clearInterval(timer); // Cleanup the interval
      });
    }
  }, [isVisible]);

  return (
    <div ref={counterRef} className="flex flex-col md:flex-row my-6 space-x-4">
      {counterNumber.map((counter, index) => (
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start from the left
          whileInView={{ opacity: 1, x: 0 }} // Move to normal position
          transition={{
            duration: 1,
            ease: "easeInOut", // Smooth transition
          }}
          viewport={{ once: true }}
          key={counter.id}
          className="text-center md:my-10 my-3"
        >
          <div className="md:border-r-2 border-r-0 md:px-10 last:border-r-0">
            <h2 className="text-[20px] md:text-[40px] font-bold">
              {counters[index] !== undefined
                ? `${counters[index]}${counter.figure}+`
                : "0+"}
            </h2>
          </div>
          <p className="text-lg">{counter.title}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Counter;
