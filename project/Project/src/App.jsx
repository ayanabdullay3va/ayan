import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./layoutt"
import Home from './pages/home';
import Favorite from './pages/favorite';
import Basket from './pages/basket';


function App() {
  const [Basket, setBasket] = useState(0)
  const [Favorite, setFavorite] = useState(0)
  const [BasketFav, setBasketFav] = useState({
    Basket:[],
    Favorite:[]
  })

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts/>}>
          <Route index element={<Home Basket={BasketFav} setBasketFav={setBasketFav}/>} />
          <Route path="basket" element={<Basket Basket={BasketFav} setBasketFav={setBasketFav} />} />
          <Route path="favorite" element={<Favorite Basket={BasketFav} setBasketFav={setBasketFav} />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
