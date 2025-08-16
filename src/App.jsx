// src/App.jsx
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AskQuestion from './pages/AskQuestion';
import Quiz from './pages/Quiz';
import QA from './pages/QA';
import Result from './pages/Result';
import Profile from './pages/Profile';
import EditProfile from "./pages/EditProfile";
import { questions } from './data/questions';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-300 via-white to-purple-700 flex flex-col">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path='/' element={<Home questions={questions} />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/askQuestion' element={<AskQuestion />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />


        {/* Private routes */}
        <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route path='/qa/:topic' element={<QA />} />
          <Route path='/result' element={<Result />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
