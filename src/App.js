import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import LayOut from './Components/Layout';
import RequireAuth from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';
import About from './pages/Aboutpage';
import Blogpage from './pages/Blogpage';
import CreatePost from './pages/CreatePost';
import Editposts from './pages/Editpost';
import Homepage from './pages/Homepage';
import { Loginpage } from './pages/Loginpage';
import { Notfoundpage } from './pages/Notfoundpage';
import SinglePage from './pages/SinglePage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Homepage />} />
            <Route path="posts" element={<Blogpage />} />
            <Route path="posts/:id" element={<SinglePage />} />
            <Route path="posts/:id/edit" element={<Editposts />} />
            <Route
              path="posts/new"
              element={
                <RequireAuth>
                  <CreatePost />
                </RequireAuth>
              }
            />
            <Route path="login" element={<Loginpage />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Notfoundpage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
