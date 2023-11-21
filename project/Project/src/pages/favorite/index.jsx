import React from 'react'
import Card from "../../components/card"
import { v4 as uuidv4 } from 'uuid';


import Header from "./../../layout/Header"
function Favorite(BasketFav,setBasketFav) {
  return (
    <div>

<Header/>

{BasketFav &&
    BasketFav.Favorite?.map(prod=>{
        return <Card key={uuidv4()} product={prod}/>
    })
}
    </div>
  )
}

export default Favorite