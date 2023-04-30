import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Header from "../src/components/Header";
import Home from "./components/Home";
import Login from './components/Login';
import Upload from './components/Upload';
import Videos from './components/Videos';
import Signup from './components/Signup';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
