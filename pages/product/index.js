import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SiteLayout from "../../layouts/SiteLayout";

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
    </div>
  );
};

export default Product;

Product.getLayout = (page) => {
  return <SiteLayout> {page} </SiteLayout>;
};
