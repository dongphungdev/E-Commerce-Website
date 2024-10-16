import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'



const Product = () => {
  const {all_product}= useContext(ShopContext)
  const {productId} =useParams()
  const product = all_product.find((e)=> e.id === Number(productId))
  if (product && product.category && product.name && product.category.length > 0 && product.name.length > 0) {
    // console.log('Category:', product.category);
    // console.log('Name:', product.name);
    // console.log('Product data is valid');
  } else {
    // console.error('Product data is incomplete or invalid');
  }
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product ={product}/> 
      <DescriptionBox/> 
      <RelatedProducts/>
    </div>
  )
}
export default Product