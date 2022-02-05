import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Page from "./pages/Page";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import Components from "./pages/Components";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import TopLine from "./components/TopLine/TopLine";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-website">
        <TopLine />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/components" element={<Components />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
