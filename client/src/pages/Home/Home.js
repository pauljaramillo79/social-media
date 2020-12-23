import React, { useEffect } from "react";

const Home = () => {
  // check in localstorage if loggedIn
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      localStorage.setItem("loggedIn", false);
    }
  }, []);
  return <div>Home</div>;
};

export default Home;
