import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NavBar from "./components/NavBar";
import MealPlanner from "./pages/MealPlanner";

function App() {
  const [data, setData] = useState();

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create setData={setData} />} />
        <Route path="/planner" element={<MealPlanner data={data} />} />
      </Routes>
    </>
  );
}

export default App;
