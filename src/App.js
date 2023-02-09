import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home/Homepage";

import "./App.css";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        {/* <Route path="/admin" exact element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<MainPage />} />
        <Route path="admin/forgotpass" element={<ForgotPassword />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
