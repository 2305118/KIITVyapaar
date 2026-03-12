import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Campus Entrepreneurs.</h1>
          <p>
            From handmade crafts to on-demand services — KIITVyapar connects campus creators with real buyers.
  Start earning. Start discovering. Start growing.
          </p>

          <button className="primary-btn">
            Explore Services
          </button>
        </div>
      </section>

      <section className="services">
        <h2>Popular Categories</h2>

        <div className="card-grid">
          <div className="card">Makeup & Mehendi</div>
          <div className="card">Crochet & Crafts</div>
          <div className="card">Tutoring</div>
          <div className="card">Home Cooked Food</div>
          <div className="card">Event Services</div>
        </div>
      </section>

      <section className="why">
        <h2>Why KIITVyapar?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>For Service Providers</h3>
            <p>
              Promote your services inside hostel. Set pricing,
              manage bookings and grow your campus business.
            </p>
          </div>

          <div className="why-card">
            <h3>For Students</h3>
            <p>
              Discover trusted services within hostel —
              quick, affordable and student-friendly.
            </p>
          </div>

          <div className="why-card">
            <h3>Fast Within Campus</h3>
            <p>
              No outside hassle. Easy coordination,
              faster delivery and hostel-based availability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
