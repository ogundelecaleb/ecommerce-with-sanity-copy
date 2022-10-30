import React from 'react';
import { withProtected } from "../src/hook/route";
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';


function  Home ({ products, bannerData,  auth }) {

  const { logout } = auth;
  return(
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Men Kicks</h2>
      <button onClick={logout}>Logout</button>
      <p>When you're a sneakerhead, you never stop collecting</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>
    
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
)};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default withProtected(Home);


