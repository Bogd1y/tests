import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios'

import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import History from './components/History/History';
import NotFound from './components/NotFound';
import Shop from './components/Shop/Shop';

function App() {
  let navigator = useNavigate()

  const [cart, setCart] = useState([])
  const [shops, setShops] = useState([])
  const [cartArray, setCartArray] = useState([]) // used for calculation and count
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('orders')) ? JSON.parse(localStorage.getItem('orders')) : [])
  const [isLoading, setIsLoading] = useState(true)

  let sum = 0;
  for (let i = 0; i < cartArray.length; i++) {
    sum = sum + cartArray[i].price;

  }

  if(shops.length > 0 ){
    let arr = shops.map(i => i.products)
    const allProducts = []
    for (let i = 0; i < arr.length; i++) {
        allProducts.push(...arr[i])
    }
  }

  
  useEffect(() => {
    navigator('/shop')
  }, [])

  useEffect(() => {
    let setTo = (res) => {
      setShops(res.data) 
      // setCartArray(res.data)
    }
    setIsLoading(true)
    axios.get("http://localhost:5000").catch(er=> console.warn(er)).then(res =>setTo(res)).finally()
    // fetch("http://localhost:5000")
    // .then(response => response.json())
    // .catch(err => console.log(err))
    // .then(data => setShops(data.message))
    // .finally(console.log(shops))
  },[])
  useEffect(()=>{
    if(shops.length > 0) setIsLoading(false)
  },[shops])
    
  
  return (<>
    {isLoading ? (<p>isLoading.... </p>) : (

    
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
          element={<Shop cart={cart} shops={shops}
          setCartArray={setCartArray}
          cartArray={cartArray}
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
      )}
    </>
  );
}

export default App;
