import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrum/Breadcrum'


const Product = () => {
  const {all_product}= useContext(ShopContext)
  const {productId} =useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
  if (product && product.category && product.name) {
    console.log('Category:', product.category);
    console.log('Name:', product.name);
  } else {
    console.error('Product data is incomplete or invalid');
  }
  return (
    <div>
      <Breadcrum product={product?.id} />
    </div>
  )
}
export default Product