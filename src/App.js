import '../src/styles/app.scss'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Header from './components/layout/Header';
import Home from './components/home/Home';
import Footer from './components/layout/Footer';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping.jsx';
import ConfirmOrder from './components/cart/ConfirmOrder';
import PaymentSuccess from './components/cart/PaymentSuccess';
import Login from './components/login/Login';
import Profile from './components/Profile/Profile';
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from './components/myOrders/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users';
import Orders from './components/admin/Orders';
import About from './components/about/About';
import PageNotFound from './components/layout/PageNotFound';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path='/confirmorder' element={<ConfirmOrder/>}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/me' element={<Profile/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/orders/:id' element={<OrderDetails/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
        <Route path='/admin/users' element={<Users/>}/>
        <Route path='/admin/orders' element={<Orders/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </Router >
  );
}

export default App;
