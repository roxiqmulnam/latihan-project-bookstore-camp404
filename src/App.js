import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import ManajemenBuku from "./components/ManajemenBuku";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' exact element={<Beranda />} />
        <Route path='/manajemen-buku' exact element={<ManajemenBuku />} />
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
