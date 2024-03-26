import React from 'react';
import TestimonialCard from './components/TestimonialCard';
import "./index.css";
import "./App.css";

const App = () => {
  const testimonials = [
    { name: "Emma Watson", text: "Wonderful service, Very Impressed" },
    { name: "Daniel Radcliffe", text: "I am in awe of the service, Really awesome" }
  ];

  return (
    <div className="tm-card">
      <h2>Customer Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} name={testimonial.name} text={testimonial.text} />
      ))}
    </div>
  );
};

export default App;
