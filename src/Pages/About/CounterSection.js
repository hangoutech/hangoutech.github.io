import React, { useEffect } from "react";
import "./CounterSection.scss";

const CounterSection = () => {
  useEffect(() => {
    const counter = (id, start, end, duration) => {
      let current = start;
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const step = Math.abs(Math.floor(duration / range));
      const obj = document.getElementById(id);
      const timer = setInterval(() => {
        current += increment;
        if (obj) obj.textContent = current;
        if (current === end) clearInterval(timer);
      }, step);
    };

    const startCounters = () => {
      counter("count1", 50, 107, 1000);
      counter("count2", 9911, 10000, 1000);
      counter("count3", 0, 21, 1000);
      counter("count4", 10, 56, 1000);
    };

    // const homeLink = document.querySelector('a[href="#aboutSection"]');
    // if (homeLink) {
    //   homeLink.addEventListener("click", startCounters);
    // }

    // return () => {
    //   if (homeLink) {
    //     homeLink.removeEventListener("click", startCounters);
    //   }
    // };
  }, []);

  return (
    <section className="counter-wrapper">
      <div className="counter-inner">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 col-lg-3">
              <div className="py-5 text-center text-white">
                <div>
                  <i className="bi bi-building count-icon"></i>
                </div>
                <div className="py-2 count">
                  <span id="count1">107</span>
                </div>
                <div>Lorem Ipsum HQs</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="py-5 text-center text-white">
                <div>
                  <i className="bi bi-people count-icon"></i>
                </div>
                <div className="py-2 count">
                  <span id="count2">1000</span>+
                </div>
                <div>Lorem Ipsum Peoples</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="py-5 text-center text-white">
                <div>
                  <i className="bi bi-trophy count-icon"></i>
                </div>
                <div className="py-2 count">
                  <span id="count3">21</span>
                </div>
                <div>Lorem Ipsum Awards</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="py-5 text-center text-white">
                <div>
                  <i className="bi bi-graph-up count-icon"></i>
                </div>
                <div className="py-2 count">
                  $<span id="count4">56</span>m
                </div>
                <div>Lorem Ipsum Revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
