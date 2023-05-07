import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './components/Product';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Product />} />
            <Route path='cart' element={<Cart/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
