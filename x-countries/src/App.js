import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);

  const getData = async () => {
    try {
      let response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response.data);
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const wrapper = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={wrapper}>
      {" "}
      {countries.map((item) => (
        <div key={item.cca3} className="card">
          <img
            src={item.flags.png}
            alt={`Flag of ${item.name.common}`}
            style={{ width: "100px", height: "100px" }}
            width="100"
            height="100"
          />
          <h2> {item.name.common} </h2>{" "}
        </div>
      ))}{" "}
    </div>
  );
};

export default App;
