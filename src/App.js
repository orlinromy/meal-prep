import React, { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));
const MealPlanner = lazy(() => import("./pages/MealPlanner"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  const [data, setData] = useState();

  return (
    <>
      <NavBar />
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create setData={setData} />} />
          <Route path="/planner" element={<MealPlanner data={data} />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
