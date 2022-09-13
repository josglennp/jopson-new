import './App.css';
import { HashRouter as Router, Routes,Route } from 'react-router-dom'
import Homepage from './components/Home/Homepage';
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
import NotFound from './components/NotFound';
import ForgotPassword from './components/admin/ForgotPassword';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />}  />
        <Route path="/admin" exact element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<MainPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path="admin/forgotpass" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App;
