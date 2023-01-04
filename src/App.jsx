import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import FastFood from "./components/fastFood/FastFood";
import Home from "./components/home/Home";
// import { useSelector, useDispatch } from "react-redux";
import MainLayout from "./components/MainLayout";
import Pizza from "./components/pizza/Pizza";
// import { decrement, increment } from "./redux/cartSlice";

function App() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="pizza" element={<Pizza />} />
          <Route path="FastFood" element={<FastFood />} />
          <Route path="Grill" element={<h1>Grill</h1>} />
          <Route path="Salad" element={<h1>Salad</h1>} />
          <Route path="LunchTime" element={<h1>lunch-time</h1>} />
          <Route path="*" element={<h1>not found</h1>} />
          <Route path="Cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
