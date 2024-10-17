import React, { useEffect, useState, useRef } from "react";

const counterNumber = [
  { id: 1, label: "2M+", title: "Download" },
  { id: 2, label: "18K+", title: "Feedback" },
  { id: 3, label: "13K+", title: "Workers" },
  { id: 4, label: "10YRS+", title: "Years of Exp" },
  { id: 5, label: "5K+", title: "Contributors" },
];

const Counter = () => {
  const [counters, setCounters] = useState(
    Array(counterNumber.length).fill("xxxx")
  );
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
      const timer = setTimeout(() => {
        setCounters(counterNumber);
      }, 1000); // Delay for 1 second to simulate counting

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isVisible]);

  return (
    <div ref={counterRef} className="flex  flex-col md:flex-row my-6 space-x-4">
      {counters.map((counter) => (
        <div key={counter.id} className="text-center md:my-10 my-3">
          <div className="md:border-r-2 border-r-0   md:px-10 last:border-r-0">
            <h2 className=" text-[20px] md:text-[40px] font-bold ">
              {counter.label}
            </h2>
          </div>
          <p className="text-lg">{counter.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
