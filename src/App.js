import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      {/* Use path="*" to match any unmatched path */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
