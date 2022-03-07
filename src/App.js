import "./App.css";
import FirstPage from "./pages/FirstPage/FirstPage";
import Header from "./pages/Header/Header";
import SecondPage from "./pages/SecondPage/SecondPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./pages/Shared/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SecondPage />}></Route>
        <Route path="/marketplace" element={<FirstPage />}></Route>
        <Route path="/buynow" element={<ThirdPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
