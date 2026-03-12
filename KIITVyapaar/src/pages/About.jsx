import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>About KIITVyapar</h1>

        <p>
          KIITVyapar is a student-driven marketplace designed to empower
          campus entrepreneurs and simplify service discovery within hostels.
        </p>

        <p>
          Whether it's mehendi designs,makeup artistry, crochet creations, tutoring,
          home-cooked meals or event services — we provide a unified
          platform where students can showcase their talent,
          connect with buyers, and grow their campus business.
        </p>

        <p>
          Our mission is simple — make services easily accessible,
          fast, reliable and trusted within the hostel community.
        </p>
      </div>

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop"
          alt="Campus marketplace"
        />
      </div>
    </section>
  );
}

export default About;
