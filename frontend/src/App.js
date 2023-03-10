import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainScreen from "./MainScreen/MainScreen";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AllRoutes />
        <MainScreen />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
