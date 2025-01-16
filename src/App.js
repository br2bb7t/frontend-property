import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilterComponent from "./components/FilterComponent";
import PropertyList from "./components/PropertyList";

const App = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    address: "",
    minPrice: null,
    maxPrice: null,
  });

  useEffect(() => {
    const fetchProperties = async () => {
      const { name, address, minPrice, maxPrice } = filters;
      const query = `?name=${name}&address=${address}&minPrice=${minPrice}&maxPrice=${maxPrice}`;
      const response = await axios.get(`http://localhost:5000/api/Properties${query}`);
      setProperties(response.data); 
    };

    fetchProperties();
  }, [filters]);

  return (
    <Router>
      <div className="app">
        <FilterComponent onFilterChange={setFilters} />
        <Routes>
          <Route
            exact
            path="/"
            element={<PropertyList properties={properties} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
