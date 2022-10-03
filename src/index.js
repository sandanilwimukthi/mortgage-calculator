import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CalculatorPage from "./Pages/CalculatorPage";
import Notfound from "./Layouts/NotFound";
import PageHeader from "./Layouts/PageHeader";
import PageFooter from "./Layouts/PageFooter";
import 'antd/dist/antd.min.css';
import './Assets/Styles/Main.css';
import { Layout } from 'antd';
import { createRoot } from 'react-dom/client';

const routing = (
  <Router>
    <div>
      <Layout data-testid="rootLayout" className="layout">
        <PageHeader />      <hr />
        <Routes>
          <Route path="/" element={<CalculatorPage/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
        <PageFooter />    
      </Layout>
    </div>
  </Router>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(routing);
