import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import View from "./View";
import NotFound from "./NotFound";

const Page = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/form" exact Component={Form} />
          <Route path="/view" exact Component={View} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
};

export default Page;
