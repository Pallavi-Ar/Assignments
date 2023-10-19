import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import Navigation from './components/Navigation';
import ViewAllUsers from './components/ViewAllUsers';
import UserModule from './modules/UserModule';
import './App.css';
import Cart from './redux/Cart';

function App() {
  return (
    <div className='App'>
      <Cart />
    </div>
  );
}

export default App;