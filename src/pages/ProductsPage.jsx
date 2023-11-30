import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { api } from "../services/api";
import { Header } from "../components/Header";
import { AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ProductsPage(){
    const notify = () => toast.error("Produto Deletado Com Sucesso!");
    const [products, setProducts] = useState([])

    async function getProducts (){
      const response = await api.get("/products");
      const productsList = response.data
      setProducts (productsList);
        console.log(productsList)
    }

    const token = localStorage.getItem('accessToken');
    async function deleteProduct(productId) {
    try {
      const response = await api.delete(`/products/${productId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      getProducts();
      notify();
    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
    }
  }

    useEffect(()=>{
      getProducts()
    },[])
    return(
        <>
        <ToastContainer/>
        <Header/>
        <ul className="ul_products">

            {products.map((product) => (
                <Product
                    key={product.id} 
                    productImg={product.img_url}
                    productName={product.title}
                    productId={product.id}
                    productPrice={product.current_price}
                    eventButton={() => deleteProduct(product.id)}
                    iconButton={<AiFillDelete size={25}
                    className="icon_delete" 
                    />}
                    
                />

            ))}
        </ul>
        </>
    )
}