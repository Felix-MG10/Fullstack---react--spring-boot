import Home from './page/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from './page/Student';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/students" element={<Student/>}/>
      </Routes>
    </Router>
  )
}

export default App
