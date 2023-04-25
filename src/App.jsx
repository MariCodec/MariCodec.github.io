import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import FastFood from "./components/fastFood/FastFood";
import Grill from "./components/grill/Grill";
import Home from "./components/home/Home";
import Lanch from "./components/lanchTime/Lanch";
// import { useSelector, useDispatch } from "react-redux";
import MainLayout from "./components/MainLayout";
import Pizza from "./components/pizza/Pizza";
import Salad from "./components/salad/Salad";
// import { decrement, increment } from "./redux/cartSlice";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pizza" element={<Pizza />} />
          <Route path="FastFood" element={<FastFood />} />
          <Route path="Grill" element={<Grill />} />
          <Route path="Salad" element={<Salad />} />
          <Route path="LunchTime" element={<Lanch />} />
          <Route path="*" element={<h1>not found</h1>} />
          <Route path="Cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
