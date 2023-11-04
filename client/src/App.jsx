import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Offcanvas from "./components/ui/Offcanvas/Offcanvas";
const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isBurger = windowWidth <= 650;
  return (
    <BrowserRouter>
      <div className="app-container">
        {isBurger && <Offcanvas />}
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
