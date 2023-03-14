import { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';

function App() {
  const [modal, setModal] = useState(false);
  const user = useContext(AuthContext);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <Router>
      <Navbar />
      <div className="w-[100%] min-h-[100vh] dark:bg-black/90">
        <div className=" w-[100%] m-auto">
          <Routes>
            <Route path="/" element={user ? <Home modal={modal} handleModal={handleModal}/> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/profile/:id" element={user ? <Profile /> : <NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
