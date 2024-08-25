import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="row">
        <div className="col-md-8">
          <h2>About Us</h2>
          <p>We are a team of passionate developers, designers, and innovators who are dedicated to creating amazing projects.</p>
          <p>Our mission is to deliver high-quality solutions that exceed our clients' expectations.</p>
          <p>Learn more about us and our story.</p>
          <button>Read More</button>
        </div>
        <div className="col-md-4">
          <img src="https://images.unsplash.com/photo-1583314965950-cd54a8b6db84?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us Image" style={{width:'400px'}} />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;