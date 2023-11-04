import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
