import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Login/Login';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import AddNewProduct from './Components/Pages/Dashboard/AddNewProduct/AddNewProduct';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import ManageAllProducts from './Components/Pages/Dashboard/ManageAllProducts/ManageAllProducts';
import ManageOrders from './Components/Pages/Dashboard/ManageOrders/ManageOrders';
import MyOrders from './Components/Pages/Dashboard/MyOrders/MyOrders';
import Home from './Components/Pages/Home/Home';
import Product from './Components/Pages/Product/Product';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';
import Register from './Components/Register/Register';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="product/:_id" element={<ProductDetails />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} >
              <Route path="/dashboard/addnewproduct" element={<AddNewProduct />} ></Route>
              <Route path="/dashboard/manageorders" element={<ManageOrders />} ></Route>
              <Route path="/dashboard/myorders" element={<MyOrders />} ></Route>
              <Route path="/dashboard/manageallproducts" element={<ManageAllProducts />} ></Route>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
