import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import History from './components/History/History';
import NotFound from './components/NotFound';
import Shop from './components/Shop/Shop';

function App() {
  let navigator = useNavigate()

  useEffect(() => {
    navigator('/shop')
  }, [])

  const [cart, setCart] = useState([])
  const [cartArray, setCartArray] = useState([]) // used for calculation and count
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('orders')) ? JSON.parse(localStorage.getItem('orders')) : [])

  let sum = 0;
  for (let i = 0; i < cartArray.length; i++) {
    sum = sum + cartArray[i].price;

  }

  return (
    <main className="App">
      <Header />

      <Routes >
        <Route path="/cart"
          element={<Cart totalPrice={sum}
            setCartArray={setCartArray}
            cartArray={cartArray}
            setCart={setCart}
            cart={cart}
            setHistory={setHistory}
            history={history}
          />}
        />
        <Route path="/shop"
          element={<Shop cart={cart}
            setCartArray={setCartArray}
            setCart={setCart} />}
        />
        <Route path="/history"
          element={<History
            history={history}
          />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </main>
  );
}

export default App;
