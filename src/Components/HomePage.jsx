import React from 'react';
import { Home, ProgLinks, ProgLink } from '../css/HomePageElements';
import '../css/HomePageElements.js';

const HomePage = () => {
  return (
    <Home>
      <h1>Welcome to the Children's Education Center!</h1>
      <p>Our center offers a variety of educational programs for children of all ages.</p>
      <ProgLinks>
        <ProgLink to="/english">English Program</ProgLink>
        <ProgLink to="/early">Early Development</ProgLink>
        <ProgLink to="/preschool">Pre-School</ProgLink>
      </ProgLinks>
    </Home>
  );
};

export default HomePage;