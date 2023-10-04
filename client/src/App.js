import Home from "../src/view/home/home";
import Logins from "../src/view/login/login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Logins/>}/>
      </Routes>
    </Router>
  );
}

export default App;
