import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import EdwardCope from './pages/EdwardCope';
import OthnielMarsh from './pages/OthnielMarsh';
import Outcomes from './pages/Outcomes';
import References from './pages/References';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/geologist/edward-cope" element={<EdwardCope />} />
          <Route path="/geologist/othniel-marsh" element={<OthnielMarsh />} />
          <Route path="/outcomes" element={<Outcomes />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
