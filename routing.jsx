import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./src/components/main";
import PrayaanPage from "./src/components/prayaanpage";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/prayaan" element={<PrayaanPage />} /> 
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
