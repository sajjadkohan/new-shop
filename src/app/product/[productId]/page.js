import React from 'react'
import { API_BASE } from '../../../../constanst';
import axios from 'axios';
import ProductDetailsView from '@/components/clientSideComponent/ProductDetailsView';
import Header from '@/components/Header';

// اینجا باید از کانتکس پروداکت استفاده کنیم
// کانتکس باید مقدار دهی بشه


const ProductDetails = async(props) => {
  // console.log();

  const data = await axios.post(`${API_BASE}/user/product/getProductById`,{
    id:props.params.productId
  },
  {cache: 'no-store'}
  )

  console.log(data.data.data);
  return (
    <div>
      <Header/>
      <ProductDetailsView data={data.data.data[0]} />
    </div>
  )
}

export default ProductDetails;
