import React, { useEffect } from "react";
import Choose from "../../components/Choose/Choose";
import Company from "../../components/Company/Company";

import Header from "../../components/Header/Header";
import Made from "../../components/Made/Made";
import Reviews from "../../components/Reviews/Reviews";
import Services from "../../components/Services/Services";

const Home = () => {
  useEffect(() => {
    document.title = "Home page";
  }, []);
  return (
    <>
      <Header />
      <Company />
      <Choose />
      <Services />
      <Made />
      <Reviews />
    </>
  );
};

export default Home;
