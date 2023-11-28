import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resst_view from "./pages/Resst_view";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant_view" element={<Resst_view />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
