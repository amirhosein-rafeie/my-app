import "./App.css";
import { Route, Routes } from "react-router-dom";

import Products from "./components/Products";
import Main from "./components/Main";
import Product from "./components/Product";
import Home from "./components/Home";
import Page404 from "./components/Page404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

export default App;
