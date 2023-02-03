import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import LayOut from './Components/Layout';
import About from './pages/Aboutpage';
import Blogpage from './pages/Blogpage';
import Homepage from './pages/Homepage';
import { Notfoundpage } from './pages/Notfoundpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
