import React, { useEffect, useState } from 'react'
import Header from "./../../layout/Header"
import Card from "../../components/card"
import { v4 as uuidv4 } from 'uuid';
import {getAllProducts} from "../../middleware/Api/product"
import Grid from '@mui/material/Grid';

function Home({BasketFav,setBasketFav}) {
    const [product,setProduct]=useState([])
    useEffect(()=>{
        getAllProducts().then((res)=>{
            setProduct(res);
        })
    },[])
  
  return (
    <div>
<Header/>

<Grid container spacing={4}>
    {
        product&&product.map(prod=>{
            return <Card key={uuidv4} product={prod}  Basket={BasketFav} setBasketFav={setBasketFav} />
        })
    }
</Grid>
    </div>
  )
}

export default Home