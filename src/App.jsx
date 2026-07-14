import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

import Homepage from "./Pages/HomePage/HomePage";
import ProductListingPage from "./Pages/ProductListingPage/ProductListingPage";
import Webdetailpage from "./Pages/Webdetailpage/Webdetailpage";
import CartPage from "./Pages/CartPage/CartPage";

import AdminLayout from "./Admin/AdminLayout/AdminLayout";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Products from "./Admin/Products/Products";
import AddProduct from "./Admin/AddProduct/AddProduct";
import Orders from "./Admin/Orders/Orders";

import AdminLogin from "./Pages/AdminLogin/AdminLogin";
import Login from "./Pages/Login/Login";
import EditProduct from "./Admin/EditProduct/EditProduct";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/product-listing"
          element={<ProductListingPage />}
        />

        <Route
          path="/web-detail"
          element={<Webdetailpage />}
        />

        <Route
          path="/cart"
          element={<Cartpage />}
        />
       <Route 
       path="/admin" element={<AdminLayout />}>
       <Route 
       index element={<Dashboard />} />
       <Route 
       path="products" element={<Products />} />
       <Route 
       path="add-product" element={<AddProduct />} />
       <Route 
       path="orders" element={<Orders />} />

      </Route>
      
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/login" element={<Login />} />
      
      <Route
      path="/admin/edit-product/:id"
      element={<EditProduct />}
      />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;