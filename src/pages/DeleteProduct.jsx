import { useState } from "react";
import { api } from "../services/api";
import { ToastContainer, toast } from 'react-toastify';
import { Header } from "../components/Header";

export function DeleteProduct(){
    const [productId, setProductId] = useState()
    const token = localStorage.getItem('accessToken');
    const notify = () => toast.error("Produto Deletado Com Sucesso!");
    async function ProductPost() {
        try {
          const response = await api.delete(`/products/${productId}`,{
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log(response)
          setProductId('')
          notify()
        } catch (error) {
          console.error('Erro ao enviar Produto:', error)
          setProductId('')
        }
      }

    return(
        <>
        <Header/>
        <ToastContainer/>
            <div className="form_container">
                <label>Id do Produto</label>
                <div className="form_content">
                    <input type="text" placeholder="id do Produto"
                        value={productId} onChange={e => setProductId(e.target.value)} 
                    />
                    <button className="" onClick={ProductPost}>Enviar</button>
                </div>
            </div>
        
        </>
    )
}