import SpicesPage from './component/Spices';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hinge from './component/Hing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page */}
        <Route path="/spicePage" element={<SpicesPage />} />
        <Route path="/hing" element={<Hinge />} />
      </Routes>
    </Router>
  );
}

export default App;
