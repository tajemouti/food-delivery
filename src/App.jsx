import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

const App = () => {
  const showLogin = useSelector((state) => state.login);

  return (
    <>
      {showLogin ? <Login /> : <></>}
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
