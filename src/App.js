import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Footer from "./components/Footer"
import Contact from "./components/Contact.jsx"
import Services from "./components/Services.jsx"



import "./styles./App.scss"
import "./styles./Header.scss"
import "./styles./Home.scss"
import "./styles./Footer.scss"
import "./styles./Contact.scss"




function App() {
  return (

    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
