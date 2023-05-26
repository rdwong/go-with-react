import React from "react";
import { Link } from "react-router-dom";

const Home = (): JSX.Element => (
  <div>
    <Link to="/about">Go to about page</Link>
  </div>
);

export default Home;
