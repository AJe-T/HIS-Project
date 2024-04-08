import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanSelection from "./Components/Pages/Plan Selection/PlanSelection";
import IncomeDetails from "./Components/Pages/Income Details/IncomeDetails";
import EducationalDetails from "./Components/Pages/Educational Details/Educationaldetails";
import KidsDetails from "./Components/Pages/Kids Details/KidsDetails";
import SummaryScreen from "./Components/Pages/Summary Screen/SummaryScreen";
import Home from "./Components/Pages/Home/Home";
import NotFound404 from "./Components/Layouts/NotFound404/NotFound404";
import CreateCase from "./Components/Pages/Create Case/CreateCase";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/CreateCase"} element={<CreateCase />} />
          <Route
            path={"/EducationalDetails"}
            element={<EducationalDetails />}
          />
          <Route path={"/PlanSelection"} element={<PlanSelection />} />
          <Route path={"/IncomeDetails"} element={<IncomeDetails />} />
          <Route path={"/KidsDetails"} element={<KidsDetails />} />
          <Route path={"/SummaryScreen"} element={<SummaryScreen />} />
          {/* ============================================================= */}
          <Route path={"*"} element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
