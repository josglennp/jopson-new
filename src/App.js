import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/dashboard" element={<MainPage />} />
      </Routes>
    </Router>
  )
}

export default App;
