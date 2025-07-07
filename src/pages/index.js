import React from 'react';
import { FaHome, FaConciergeBell, FaImage, FaInfoCircle, FaEnvelope, FaPlane, FaMusic, FaGlobe, FaHeart, FaBuilding, FaHotel, FaTicketAlt } from 'react-icons/fa';


export default function Home() {
  return (
    <div className="main-container">

      <header className="header">
        <div className="logo">EventCo</div>
        <nav className="nav">
          <a href="#home"><FaHome /> Home</a>
          <a href="#services"><FaConciergeBell /> Services</a>
          <a href="#portfolio"><FaImage /> Portfolio</a>
          <a href="#about"><FaInfoCircle /> About Us</a>
          <a href="#contact"><FaEnvelope /> Contact</a>
        </nav>
        <button className="btn">Enquire Now</button>
      </header>

      <section className="hero" id="home">
        <h1>B2B Event Management<br /> & Travel Services</h1>
        <p>Let's Plan Together</p>
        <button className="btn">Get Started</button>
      </section>

      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {[
            { name: 'Events & Socials', icon: <FaBuilding size={40} /> },
            { name: 'Concerts & Shows', icon: <FaMusic size={40} /> },
            { name: 'Destination Management', icon: <FaGlobe size={40} /> },
            { name: 'Weddings', icon: <FaHeart size={40} /> },
            { name: 'Corporate Travel', icon: <FaPlane size={40} /> },
            { name: 'Incentive Tours', icon: <FaBuilding size={40} /> },
            { name: 'Hotel Bookings', icon: <FaHotel size={40} /> },
            { name: 'Ticketing & Visa', icon: <FaTicketAlt size={40} /> },
          ].map((service, index) => (
            <div key={index} className="service-item">
              <div>{service.icon}</div>
              <h3>{service.name}</h3>
              <p>Premium service with impeccable execution for unforgettable moments.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2>Our Portfolio</h2>
        <div className="portfolio-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="portfolio-item">
              <img src={`https://picsum.photos/600/400?random=${item}`} alt="Event" />
              <p>Project {item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <h2>About Us</h2>
        <p>We specialize in luxury event management & travel experiences for global brands, social events, and corporate clientele seeking excellence and perfection in every detail.</p>
        <button className="btn">Learn More</button>
      </section>

      <section className="contact" id="contact">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        © 2025 EventCo. All rights reserved.
      </footer>

    </div>
  );
}
