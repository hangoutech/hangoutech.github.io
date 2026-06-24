import React from "react";
import "./CounterSection.scss";

const stats = [
  { number: "20+", label: "Projects Delivered" },
  { number: "4+",  label: "Industries Served" },
  { number: "5+",  label: "Countries" },
  { number: "2+",  label: "Years of Expertise" },
];

const CounterSection = () => (
  <section className="counter-wrapper">
    <div className="counter-inner">
      <div className="container">
        <div className="row g-0">
          {stats.map((s) => (
            <div key={s.label} className="col-6 col-lg-3">
              <div className="py-5 text-center text-white">
                <div className="py-2 count">{s.number}</div>
                <div>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CounterSection;
