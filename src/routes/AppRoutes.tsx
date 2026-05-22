import {
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import Students from "../pages/Students";

import Courses from "../pages/Courses";

import AddEditCourse from "../pages/AddEditCourse";

import StudentDetails from "../pages/StudentDetails";

import Login from "../pages/Login";

import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/Mainlayout";



const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        }
      >
        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="students"
          element={<Students />}
        />

        <Route
          path="students/:id"
          element={
            <StudentDetails />
          }
        />

        <Route
          path="courses"
          element={<Courses />}
        />

        <Route
          path="courses/add"
          element={
            <AddEditCourse />
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;