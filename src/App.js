import React, { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./pages/ErrorPage";

const Home = lazy(() => import("./pages/Home"));
const Create = lazy(() => import("./pages/Create"));
const MealPlanner = lazy(() => import("./pages/MealPlanner"));

function App() {
  const [data, setData] = useState();

  return (
    <>
      <NavBar />
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create setData={setData} />} />
            <Route path="/planner" element={<MealPlanner data={data} />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
