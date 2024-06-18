import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import ProjectsPage from "./routes/ProjectsPage";
import Resume from "./routes/Resume";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  );
}

export default App;
