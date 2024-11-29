import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FormExample from "./components/FormExample";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Team from "./pages/Team";
import TeamMemberDetail from "./pages/TeamMemberDetail";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <AppNavbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamMemberDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
