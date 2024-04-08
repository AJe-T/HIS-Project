import React from "react";
//Bootstrap Properties
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import CreatePlan from "./Modules/Dynamic/Admin-1_mini_1/Components/Create_Plan/CreatePlan";
import ViewPlan from "./Modules/Dynamic/Admin-1_mini_1/Components/View_Plan/ViewPlan";
import UpdatePlan from "./Modules/Dynamic/Admin-1_mini_1/Components/Update_Plan/UpadtePlan";
import DeletePlan from "./Modules/Dynamic/Admin-1_mini_1/Components/Delete-Plan/DeletePlan";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reports from "./Modules/Dynamic/Reports-mini_2/Components/Reports/Reports";
import Home from "./Modules/Static/Home/Home";
import DashBoard from "./Modules/Static/DashBoard/Dashboard";
import ViewAccounts from "./Modules/Dynamic/Admin-2_mini_3/Components/ViewAccounts/ViewAccounts";
import NotFound404 from "./Modules/Utils/404/404Pages/NotFound404";
import Registration from "./Modules/Dynamic/Admin-2_mini_3/Components/Registration/Registration";
import Login from "./Modules/Dynamic/Admin-2_mini_3/Components/Login/Login";
import ActiveAccount from "./Modules/Dynamic/Admin-2_mini_3/Components/ActiveAccount/ActiveAccount";
import ForgotPassword from "./Modules/Dynamic/Admin-2_mini_3/Components/ForgotPassword/ForgotPassword";
import UpdateAccount from "./Modules/Dynamic/Admin-2_mini_3/Components/UpdateAccount/UpdateAccount";
import Active from "./Modules/Dynamic/Admin-1_mini_1/Components/Active_Plan/Active";
import DeleteAccount from "./Modules/Dynamic/Admin-2_mini_3/Components/Delete/Delete";
import ActiveSwitch from "./Modules/Dynamic/Admin-2_mini_3/Components/ActiveSwitch/ActiveSwitch";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
      {/* ----------------------------------------------------------------- */}
      <BrowserRouter>
        <Routes>
          {/* ------------------- mini-1 ------------------------ */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/create" element={<CreatePlan />}></Route>
          <Route path="/view" element={<ViewPlan />}></Route>
          <Route path="/update/:planId" element={<UpdatePlan />}></Route>
          <Route path="/delete/:planId" element={<DeletePlan />}></Route>
          <Route path="/active/:planId/:value" element={<Active />}></Route>

          {/* --------------- Reports (mini-2) ---------------------- */}
          <Route path="/reports" element={<Reports />}></Route>

          {/* ---------------- Mini-3 ------------------------ */}
          <Route path="/viewAccounts" element={<ViewAccounts />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/activeAccount" element={<ActiveAccount />}></Route>
          <Route
            path="/activeSwitch/:userId/:currentStatus"
            element={<ActiveSwitch />}
          ></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route
            path="/updateAccount/:userId"
            element={<UpdateAccount />}
          ></Route>
          <Route
            path="/deleteAccount/:userId"
            element={<DeleteAccount />}
          ></Route>

          {/* ----------- extra ----------------------- */}
          <Route path="*" element={<NotFound404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
