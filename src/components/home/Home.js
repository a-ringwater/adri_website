import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeCtr = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <HomeCtr>
      <section>
        <h1>I am Adrien Anodeau</h1>
        <h2>Web & Mobile developer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl
          euismod urna bibendum
        </p>

        <Link to="/portfolio">
          <div>My portfolio</div>
        </Link>
        <Link to="/contact">
          <div>Contact</div>
        </Link>
      </section>
      <section>IMAGE</section>
    </HomeCtr>
  );
};

export default Home;
