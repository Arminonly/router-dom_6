import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import LayOut from './Components/Layout';
import About from './pages/Aboutpage';
import Blogpage from './pages/Blogpage';
import CreatePost from './pages/CreatePost';
import Editposts from './pages/Editpost';
import Homepage from './pages/Homepage';
import { Notfoundpage } from './pages/Notfoundpage';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Homepage />} />
          <Route path="posts" element={<Blogpage />} />
          <Route path="posts/:id" element={<SinglePage/>} />
          <Route path="posts/:id/edit" element={<Editposts/>} />
          <Route path="posts/new" element={<CreatePost/>} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
