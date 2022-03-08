import "./App.css";
import FirstPage from "./pages/FirstPage/FirstPage";
import Header from "./pages/Header/Header";
import SecondPage from "./pages/SecondPage/SecondPage";
import ThirdPage from "./pages/ThirdPage/ThirdPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SecondPage />}></Route>
        <Route path="/marketplace" element={<FirstPage />}></Route>
        <Route path="/buynow" element={<ThirdPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
