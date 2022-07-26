import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//paginas
import Home from "./pages/Home";
import More from "./pages/More";
import Navbar from '../src/components/navbar/Navbar';
import Footer from "./components/footer/Footer";


function App() {
  return <Router>

  <GlobalStyle/>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/more" element={<More/>}/>
      <Route path="/Download" element={<More/>}/>
    </Routes>

    <Footer />
  </Router>
}

export default App;
