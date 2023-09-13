import React from "react";
import { Route, Routes } from 'react-router-dom';
import EditPage from "./component/page/edit";
import LoginPage from "./component/page/login";
import MainPage from "./component/page/main";
import './css/common.css';
const app = () : JSX.Element => {
  return (
  <>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/edit" element={<EditPage />} />
    </Routes>
  </>)
}

export default app;