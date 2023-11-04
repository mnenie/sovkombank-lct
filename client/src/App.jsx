import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
